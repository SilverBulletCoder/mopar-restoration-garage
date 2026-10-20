/**
 * Cloudflare Pages Function for read-only Mopar photo delivery from private R2.
 * /media/<gallery>/<filename> maps to R2 key <gallery>/<filename>.
 * The R2 bucket stays private; only GET and HEAD are handled.
 */
const GALLERIES = new Set(['1957-d100', '1973-cuda', '1974-w100']);
const IMAGE_NAME = /^[a-z0-9]+(?:-[a-z0-9]+)*\.(?:jpe?g|png|webp|gif)$/;
const MAX_IMAGE_BYTES = 20 * 1024 * 1024;
const CONTENT_TYPES = Object.freeze({
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  gif: 'image/gif',
});

function errorResponse(method, status) {
  const messages = { 404: 'Not Found', 405: 'Method Not Allowed', 503: 'Media Unavailable' };
  const headers = {
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  };
  if (status === 405) headers.Allow = 'GET, HEAD';
  return new Response(method === 'HEAD' ? null : messages[status], { status, headers });
}

function mediaKey(params) {
  // A Pages [[path]] wildcard is an array. Reject traversal, encoded names,
  // extra segments, and paths outside the three approved vehicle galleries.
  const segments = params?.path;
  if (!Array.isArray(segments) || segments.length !== 2) return null;
  const [gallery, filename] = segments;
  if (typeof gallery !== 'string' || typeof filename !== 'string') return null;
  if (!GALLERIES.has(gallery) || !IMAGE_NAME.test(filename)) return null;
  return gallery + '/' + filename;
}

export async function onRequest({ request, env, params }) {
  const method = request.method;
  if (method !== 'GET' && method !== 'HEAD') {
    return errorResponse(method, 405);
  }

  const key = mediaKey(params);
  if (!key) return errorResponse(method, 404);

  const bucket = env?.MEDIA;
  if (!bucket || typeof bucket.get !== 'function' || typeof bucket.head !== 'function') {
    return errorResponse(method, 503);
  }

  let object;
  try {
    object = method === 'HEAD' ? await bucket.head(key) : await bucket.get(key);
  } catch {
    // Do not expose bucket identifiers, storage errors or credentials in HTTP.
    return errorResponse(method, 503);
  }

  if (!object) return errorResponse(method, 404);
  if (typeof object.size !== 'number' || object.size < 0 || object.size > MAX_IMAGE_BYTES) {
    return errorResponse(method, 404);
  }
  if (method === 'GET' && !object.body) return errorResponse(method, 503);

  const extension = key.slice(key.lastIndexOf('.') + 1);
  const headers = new Headers({
    'Content-Type': CONTENT_TYPES[extension],
    'Content-Length': String(object.size),
    'Cache-Control': 'public, max-age=300',
    'X-Content-Type-Options': 'nosniff',
  });
  if (object.httpEtag) headers.set('ETag', object.httpEtag);

  return new Response(method === 'HEAD' ? null : object.body, {
    status: 200,
    headers,
  });
}
