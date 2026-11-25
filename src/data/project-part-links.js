// Project-specific parts wishlist data; see original source links in the DEV Global Links page.
const suppliers = [
  {
    name: 'Specialist Paints',
    homepage: 'https://usa.specialistpaints.com/',
    category: 'Paint Suppliers',
    description: 'Custom Paints Inc — automotive paint colors and finishes.',
    references: [
      {
        title: 'Chrysler Deep Sherwood Green — Paint Code G8',
        url: 'https://usa.specialistpaints.com/products/chrysler-deep-sherwood-green-paint-code-g8?variant=40407905861811',
        description: '12 oz aerosol paint option, code G8.',
        image: 'https://usa.specialistpaints.com/cdn/shop/products/CAN_f8f059a8-5bbb-4c4e-9c75-c811bec8b1ee.jpg?v=1679064890',
        imageAlt: 'Specialist Paints 12 oz aerosol can product photo',
        linkLabel: 'View paint'
      },
      {
        title: 'Chrysler Green Go — Paint Code J6',
        url: 'https://usa.specialistpaints.com/products/chrysler-green-go-paint-code-j6?variant=42389579792639',
        description: '12 oz aerosol paint option, code J6.',
        image: 'https://usa.specialistpaints.com/cdn/shop/products/CAN_0600e4ba-1a23-4436-9eca-97710dffecb2.jpg?v=1679065336',
        imageAlt: 'Specialist Paints 12 oz aerosol can product photo',
        linkLabel: 'View paint'
      }
    ]
  },
  {
    name: 'Southern Polyurethanes (SPI)',
    homepage: 'https://www.southernpolyurethanes.com/',
    category: 'Paint Suppliers',
    description: 'Professional automotive epoxy primers and refinishing coatings.',
    references: [
      {
        title: 'SPI Epoxy Primer — Two-Part Bare Metal Primer',
        url: 'https://www.southernpolyurethanes.com/products/primers/',
        description: 'SPI epoxy primer product information, including activator 6700 and available colors. This is epoxy, not high-build polyester filler.',
        image: 'https://static.wixstatic.com/media/8ced3e_087decea4fdc4c188cf74427fbfbdf9a~mv2.png/v1/fill/w_312,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/primers-epoxy-primer.png',
        imageAlt: 'Southern Polyurethanes epoxy primer container',
        linkLabel: 'View epoxy primer',
      }
    ]
  },
  {
    name: 'Tamco Paint',
    homepage: 'https://tamcopaint.com/',
    category: 'Paint Suppliers',
    description: 'Automotive epoxy primer and refinishing coating systems.',
    references: [
      {
        title: 'Tamco DTA Epoxy Primer / Sealer Kit — HP661 Gray',
        url: 'https://tamcopaint.com/products/dta-epoxy-direct-to-anything',
        description: 'Direct-to-substrate 2K epoxy primer/sealer; kit page also offers black and white.',
        image: 'https://tamcopaint.com/cdn/shop/files/DTA_HP661_Epoxy_Primer_Grey_Gallon.png?v=1758546651&width=480',
        imageAlt: 'Tamco Paint HP661 DTA epoxy primer gray gallon container',
        linkLabel: 'View epoxy primer kit',
      }
    ]
  },
  {
    name: 'SEM Products',
    homepage: 'https://semproducts.com/',
    category: 'Paint Suppliers',
    description: 'Automotive repair coatings and welding preparation products.',
    references: [
      {
        title: 'SEM Copperweld Weld-Through Primer — 40793',
        url: 'https://semproducts.com/product/copperweldtm-primer/40793',
        description: 'Copper-enriched, zinc-based weld-through primer; 16 oz aerosol for overlapping welded panels.',
        image: 'https://semproducts.com/public/content/parts/PIM40973_web.png',
        imageAlt: 'SEM Products Copperweld weld-through primer aerosol can',
        linkLabel: 'View weld-through primer',
      }
    ]
  },
  {
    name: 'AMK Products',
    homepage: 'https://www.amkproducts.com/',
    category: 'Hardware & Fasteners',
    description: 'Fastener kits and hardware for automotive restoration.',
    references: [
      {
        title: 'Chrysler Master Chassis Fastener Kit (73B-SBDC)',
        url: 'https://www.amkproducts.com/master-kits/chrysler-master-fastener-kits/?product_id=73B-SBDC&masterkits=ChryslerMasterKits&element=Chassis',
        description: 'Chrysler chassis master fastener kit reference, part 73B-SBDC.',
        image: 'https://www.amkproducts.com/wp-content/uploads/2018/12/KIT_69-E87-1-1-635x357.png',
        imageAlt: 'Representative AMK master fastener kit display photo',
        imageNote: 'Representative supplier image',
        linkLabel: 'View fastener kit'
      }
    ]
  },
  {
    name: 'Auto Metal Direct',
    homepage: 'https://www.autometaldirect.com/',
    category: 'Sheet Metal & Body Restoration',
    description: 'Replacement panels and sheet metal for classic vehicles.',
    references: [
      {
        title: 'Windshield — Clear — 1970–1974 Dodge/Plymouth E-Body',
        url: 'https://www.autometaldirect.com/windshield---clear---70-74-dodge-plymouth-e-body',
        description: 'Clear (non-tinted) laminated replacement windshield; listed for 1970–1974 Plymouth Barracuda/’Cuda and Dodge Challenger.',
        linkLabel: 'View windshield',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Roof Skins',
        url: 'https://www.autometaldirect.com/body-components/roof/roof-skins',
        description: 'Browse replacement roof skins, including the 1970–1974 Barracuda listing.',
        image: 'https://www.autometaldirect.com/cache/medium/product/1013/600-1570-main.webp',
        imageAlt: 'Auto Metal Direct 1970–1974 Barracuda roof skin',
        linkLabel: 'Browse roof skins',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Plymouth ’Cuda Parts',
        url: 'https://www.autometaldirect.com/search?query=cuda&page=1',
        description: 'Search results for ’Cuda restoration parts and body components.',
        image: 'https://www.autometaldirect.com/themes/shop/default/build/images/logo-C908UMhq.png',
        imageAlt: 'Auto Metal Direct supplier logo for the ’Cuda parts search',
        linkLabel: 'Browse ’Cuda parts',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Trunk Floor — OE Style — 1971–1974 Barracuda',
        url: 'https://www.autometaldirect.com/trunk-floor-oe-style-71-74-barracuda',
        description: 'Full OE-style replacement trunk floor.',
        image: 'https://www.autometaldirect.com/cache/medium/product/1210/800-1571_800.webp',
        imageAlt: 'Auto Metal Direct product photo — Trunk Floor — OE Style — 1971–1974 Barracuda',
        linkLabel: 'View product',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Trunk Floor Extension / Drop-Off — LH — 1970–1974 Barracuda',
        url: 'https://www.autometaldirect.com/trunk-floor-extension-drop-off-lh-70-74-barracuda',
        description: 'Driver-side trunk floor extension.',
        image: 'https://www.autometaldirect.com/cache/medium/product/1252/840-1570-L_800.webp',
        imageAlt: 'Auto Metal Direct product photo — Trunk Floor Extension / Drop-Off — LH — 1970–1974 Barracuda',
        linkLabel: 'View product',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Trunk Floor Extension / Drop-Off — RH — 1970–1974 Barracuda',
        url: 'https://www.autometaldirect.com/trunk-floor-extension-drop-off-rh-70-74-barracuda',
        description: 'Passenger-side trunk floor extension.',
        image: 'https://www.autometaldirect.com/cache/medium/product/1253/840-1570-R_800.webp',
        imageAlt: 'Auto Metal Direct product photo — Trunk Floor Extension / Drop-Off — RH — 1970–1974 Barracuda',
        linkLabel: 'View product',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Trunk Floor Braces — 2-Piece Set — 1970–1974 E-Body',
        url: 'https://www.autometaldirect.com/trunk-floor-braces-2pcs-set-70-74-e-body',
        description: 'Two-piece trunk floor brace set.',
        image: 'https://www.autometaldirect.com/cache/medium/product/5028/820-1570-P_800.webp',
        imageAlt: 'Auto Metal Direct product photo — Trunk Floor Braces — 2-Piece Set — 1970–1974 E-Body',
        linkLabel: 'View product',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Fuel Filler Tube to Trunk Floor Seal — 1970–1974 E-Body',
        url: 'https://www.autometaldirect.com/fuel-filler-tube-to-trunk-floor-seal-70-74-e-body',
        description: 'Seal at the fuel filler tube opening in the trunk floor.',
        image: 'https://www.autometaldirect.com/cache/medium/product/3899/F-151R_800.webp',
        imageAlt: 'Auto Metal Direct product photo — Fuel Filler Tube to Trunk Floor Seal — 1970–1974 E-Body',
        linkLabel: 'View product',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Outer Wheelhouse — LH — 1970–1974 Barracuda',
        url: 'https://www.autometaldirect.com/outer-wheelhouse-lh-70-74-barracuda',
        description: 'Driver-side outer rear wheelhouse panel.',
        image: 'https://www.autometaldirect.com/cache/medium/product/2722/770-1570-L_800.webp',
        imageAlt: 'Auto Metal Direct product photo — Outer Wheelhouse — LH — 1970–1974 Barracuda',
        linkLabel: 'View product',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Outer Wheelhouse — RH — 1970–1974 Barracuda',
        url: 'https://www.autometaldirect.com/outer-wheelhouse-rh-70-74-barracuda',
        description: 'Passenger-side outer rear wheelhouse panel.',
        image: 'https://www.autometaldirect.com/cache/medium/product/2723/770-1570-R_800.webp',
        imageAlt: 'Auto Metal Direct product photo — Outer Wheelhouse — RH — 1970–1974 Barracuda',
        linkLabel: 'View product',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Inner Wheelhouse — LH — 1970–1974 E-Body',
        url: 'https://www.autometaldirect.com/inner-wheelhouse-lh-70-74-e-body',
        description: 'Driver-side inner rear wheelhouse panel.',
        image: 'https://www.autometaldirect.com/cache/medium/product/2704/760-1570-L_800.webp',
        imageAlt: 'Auto Metal Direct product photo — Inner Wheelhouse — LH — 1970–1974 E-Body',
        linkLabel: 'View product',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Inner Wheelhouse — RH — 1970–1974 E-Body',
        url: 'https://www.autometaldirect.com/inner-wheelhouse-rh-70-74-e-body',
        description: 'Passenger-side inner rear wheelhouse panel.',
        image: 'https://www.autometaldirect.com/cache/medium/product/2705/760-1570-R_800.webp',
        imageAlt: 'Auto Metal Direct product photo — Inner Wheelhouse — RH — 1970–1974 E-Body',
        linkLabel: 'View product',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Rear Frame Rail — LH — 1970–1974 E-Body',
        url: 'https://www.autometaldirect.com/rear-frame-rail-lh-70-74-e-body',
        description: 'Driver-side rear structural frame rail.',
        image: 'https://www.autometaldirect.com/cache/medium/product/1309/895-1570-L_800.webp',
        imageAlt: 'Auto Metal Direct product photo — Rear Frame Rail — LH — 1970–1974 E-Body',
        linkLabel: 'View product',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Rear Frame Rail — RH — 1970–1974 E-Body',
        url: 'https://www.autometaldirect.com/rear-frame-rail-rh-70-74-e-body',
        description: 'Passenger-side rear structural frame rail.',
        image: 'https://www.autometaldirect.com/cache/medium/product/1310/895-1570-R_800.webp',
        imageAlt: 'Auto Metal Direct product photo — Rear Frame Rail — RH — 1970–1974 E-Body',
        linkLabel: 'View product',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Tail Light Panel — 1973–1974 Barracuda',
        url: 'https://www.autometaldirect.com/tail-light-panel---73-74-barracuda',
        description: 'Model-year-specific rear tail light panel.',
        image: 'https://www.autometaldirect.com/cache/medium/product/1326/900-1573_800.webp',
        imageAlt: 'Auto Metal Direct product photo — Tail Light Panel — 1973–1974 Barracuda',
        linkLabel: 'View product',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Deck Lid Without Spoiler Holes — 1970–1974 Barracuda',
        url: 'https://www.autometaldirect.com/deck-lid-without-spoiler-holes-70-74-barracuda',
        description: 'Replacement trunk lid without predrilled spoiler holes.',
        image: 'https://www.autometaldirect.com/cache/medium/product/1282/850-1570-1_800.webp',
        imageAlt: 'Auto Metal Direct product photo — Deck Lid Without Spoiler Holes — 1970–1974 Barracuda',
        linkLabel: 'View product',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Gas Tank Straps — LH/RH Pair — 1970–1974 Dodge/Plymouth E-Body',
        url: 'https://www.autometaldirect.com/gas-tank-straps-lh-rh-pair-70-74-dodge-plymouth-e-body',
        description: 'Pair of fuel tank retention straps.',
        image: 'https://www.autometaldirect.com/cache/medium/product/2803/X880-1570-P_800.webp',
        imageAlt: 'Auto Metal Direct product photo — Gas Tank Straps — LH/RH Pair — 1970–1974 Dodge/Plymouth E-Body',
        linkLabel: 'View product',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Front Fender — RH — 1972–1974 Barracuda',
        url: 'https://www.autometaldirect.com/front-fender-rh-72-74-barracuda',
        description: 'Right-hand (passenger-side) front replacement fender; AMD 1972–1974 Barracuda fitment listing.',
        image: 'https://www.autometaldirect.com/cache/medium/product/291/200-1572-R_1.webp',
        imageAlt: 'Auto Metal Direct right-hand front fender for 1972–1974 Barracuda',
        linkLabel: 'View front fender',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      },
      {
        title: 'Front Grille — OE-Style — 1972–1974 Barracuda',
        url: 'https://www.autometaldirect.com/grille-72-74-barracuda',
        description: 'Reproduction OE-style front grille for 1972–1974 Plymouth Barracuda.',
        image: 'https://www.autometaldirect.com/cache/medium/product/19381/X150-157201.webp',
        imageAlt: 'Auto Metal Direct reproduction front grille for 1972–1974 Barracuda',
        linkLabel: 'View grille',
        vehicleApplicability: '1973 Plymouth ’Cuda'
      }
    ]
  },
  {
    name: 'Detroit Muscle Technologies',
    homepage: 'https://www.detroitmuscletechnologies.com/',
    category: 'Restoration Parts & Components',
    description: 'Mopar and other classic vehicle restoration parts, gaskets, and components.',
    references: []
  }
];

// Stage 1 migration source: preserve the existing link titles, supplier, URLs,
// descriptions and images verbatim from the DEV Global Links page.
// Statuses are initial review states only; no purchases are inferred.
// Keep all source records intact until the Global Links migration is approved.
export const sourceSupplierLinks = suppliers;

const cudaSuppliers = new Set(['Specialist Paints', 'AMK Products', 'Auto Metal Direct']);

export const cudaProjectPartLinks = sourceSupplierLinks
  .filter((supplier) => cudaSuppliers.has(supplier.name))
  .map((supplier) => ({
    ...supplier,
    references: supplier.references
      .filter((part) => !part.linkLabel?.startsWith('Browse'))
      .map((part) => ({ ...part, status: 'Interested' }))
  }))
  .filter((supplier) => supplier.references.length > 0);
