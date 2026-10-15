# Mopar Restoration Garage

A public website and educational project documenting classic Mopar restorations and how AI is used to plan, research, troubleshoot, and share the work.

## Vehicles
- 1973 Plymouth 'Cuda — featured restoration
- 1957 Dodge D100
- 1974 Dodge W100

## Site
This repository contains an Astro static website deployed through Cloudflare Pages, with the owner-configured domain [mopar.thatcrafter.com](https://mopar.thatcrafter.com). The production branch is `main`; Cloudflare is configured to build with `npm run build` and publish `dist/`. The owner reported restoring the GitHub connection on 2026-10-15. Automatic deployments should resume when a new commit is pushed; verify the production deployment status in Cloudflare Pages.

### Local development
```sh
npm install
npm run dev
```

### Production build
```sh
npm run build
```

Output directory: `dist/`.

## About the creator
The owner-approved first-person bio is available at `/about/` in the Astro site. It explains why ThatCrafter uses AI for ADHD-aware project continuity, including non-linear tasks and resuming paused work. No legal name or other private identifier is included.

## Content and privacy
Only reviewed, explicitly approved information belongs in this **public** repository. Do not publish private conversation logs, credentials, home camera access details, personal addresses, or proprietary repair manuals. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Current status
Initial public website scaffold. No videos, donations, affiliate links, or live streams have been connected.
