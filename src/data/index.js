export const SITE = {
  brand: 'The Harlow Group',
  tagline: 'Victoria Luxury Real Estate',
  agent: {
    name: 'Natalie Harlow, PREC*',
    role: 'Founder & Principal Advisor',
    credentials: "PREC* · Top 1% Victoria Real Estate Board · President's Award 2024",
    phone: '250-555-0188',
    phoneHref: 'tel:+12505550188',
    email: 'hello@theharlowgroup.ca',
    emailHref: 'mailto:hello@theharlowgroup.ca',
    portrait: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
  },
  address: '1 Dallas Road, Victoria, BC V8V 4Z9',
  brokerage: 'The Harlow Group · Victoria, British Columbia',
  stats: [
    { value: 1.4, prefix: '$', suffix: 'B+', label: 'In career sales volume' },
    { value: 580, suffix: '+', label: 'Families served' },
    { value: 9, suffix: ' days', label: 'Avg. days on market' },
    { value: 101, suffix: '%', label: 'Of list price, on average' },
  ],
  featured: ['oceanfront-oak-bay', 'heritage-rockland', 'modern-cordova-bay'],
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
  },
}

export const LISTINGS = [
  {
    slug: 'oceanfront-oak-bay',
    status: 'For Sale',
    price: 6450000,
    address: '3100 Beach Drive',
    area: 'Oak Bay',
    beds: 5,
    baths: 6,
    sqft: 6200,
    lot: '0.74 acre',
    year: 2019,
    type: 'Oceanfront',
    blurb: 'A glass-walled contemporary masterpiece perched above the Salish Sea, with uninterrupted views to Mount Baker.',
    description: 'Set behind a private gate on one of Oak Bay\'s most coveted waterfront stretches, this architectural residence frames the ocean from nearly every room. Walls of glass dissolve the line between inside and out, opening to an infinity-edge pool and 120 feet of low-bank shoreline. The chef\'s kitchen flows to a great room anchored by a board-formed concrete fireplace, while the primary wing offers a spa bath, private terrace and morning light over the water.',
    features: [
      '120 ft of low-bank waterfront',
      'Infinity-edge pool & hot tub',
      "Chef's kitchen with butler's pantry",
      'Primary wing with spa bath',
      'Smart-home automation throughout',
      'Heated 3-car garage',
    ],
    hero: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'heritage-rockland',
    status: 'For Sale',
    price: 3995000,
    address: '1042 Joan Crescent',
    area: 'Rockland',
    beds: 6,
    baths: 5,
    sqft: 5400,
    lot: '0.41 acre',
    year: 1912,
    type: 'Heritage Estate',
    blurb: 'A meticulously restored Edwardian estate moments from Craigdarroch Castle, blending period craftsmanship with modern comfort.',
    description: 'Original leaded glass, quarter-sawn oak and soaring coffered ceilings have been lovingly preserved and paired with a discreetly modern kitchen and systems. Mature, hedged gardens wrap a sun-drenched terrace, and a carriage house offers flexible studio or guest accommodation. A rare opportunity to own a piece of Victoria\'s storied Rockland district.',
    features: [
      'Designated heritage residence',
      'Restored leaded-glass windows',
      "Chef's kitchen with AGA range",
      'Carriage house / studio',
      'Mature walled gardens',
      'Walk to Craigdarroch Castle',
    ],
    hero: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'modern-cordova-bay',
    status: 'For Sale',
    price: 2785000,
    address: '5180 Cordova Bay Road',
    area: 'Cordova Bay',
    beds: 4,
    baths: 4,
    sqft: 3950,
    lot: '0.33 acre',
    year: 2022,
    type: 'New Construction',
    blurb: 'Warm contemporary new-build steps from the beach, with vaulted living spaces and seamless indoor-outdoor flow.',
    description: 'Designed for relaxed West Coast living, this 2022 residence pairs white oak floors and limewashed walls with floor-to-ceiling glass. The vaulted great room opens to a covered outdoor lounge with fireplace, and the main-floor primary suite means single-level living is effortless. A short stroll to Mattick\'s Farm and the sands of Cordova Bay.',
    features: [
      'Built 2022, under warranty',
      'Main-floor primary suite',
      'Vaulted great room',
      'Covered outdoor lounge & fireplace',
      'White oak & limewash finishes',
      'Steps to Cordova Bay beach',
    ],
    hero: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'penthouse-downtown',
    status: 'For Sale',
    price: 1895000,
    address: '707 – 760 Johnson Street',
    area: 'Downtown',
    beds: 2,
    baths: 3,
    sqft: 1840,
    lot: '—',
    year: 2021,
    type: 'Penthouse',
    blurb: 'A corner penthouse above the Inner Harbour with two terraces and skyline-to-sea views.',
    description: 'Floor-to-ceiling glass wraps this corner penthouse, capturing the Inner Harbour, the Olympic Mountains and city lights beyond. An entertainer\'s kitchen with integrated appliances opens to a 400 sq ft terrace. Two secured parking stalls, a private storage room and concierge service complete the offering — lock-and-leave luxury in the heart of the city.',
    features: [
      'Corner penthouse, 2 terraces',
      'Inner Harbour & mountain views',
      'Integrated Gaggenau kitchen',
      '2 secured parking stalls',
      'Concierge & fitness centre',
      'Walk score 98',
    ],
    hero: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'acreage-saanich',
    status: 'For Sale',
    price: 3250000,
    address: '1755 Mount Newton Cross Road',
    area: 'Central Saanich',
    beds: 5,
    baths: 4,
    sqft: 4600,
    lot: '4.9 acres',
    year: 2008,
    type: 'Estate Acreage',
    blurb: 'A gated country estate on nearly five acres with vineyard potential and sweeping pastoral views.',
    description: 'Down a tree-lined drive, this craftsman estate sits amid manicured grounds, fenced paddocks and a spring-fed pond. The vaulted timber-frame great room centres on a stone hearth, and the kitchen opens to a wraparound veranda built for sunsets over the Saanich Peninsula. Outbuildings include a barn and a detached studio — room to grow, garden or simply breathe.',
    features: [
      '4.9 private acres, gated',
      'Timber-frame great room',
      'Barn & detached studio',
      'Spring-fed pond',
      'Vineyard / hobby-farm potential',
      '10 minutes to the airport & ferries',
    ],
    hero: 'https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'seaside-sidney',
    status: 'Sold',
    price: 1650000,
    address: '2480 Seaview Lane',
    area: 'Sidney',
    beds: 3,
    baths: 3,
    sqft: 2600,
    lot: '0.22 acre',
    year: 2016,
    type: 'Seaside',
    blurb: 'A bright seaside home in the heart of Sidney-by-the-Sea — sold by The Harlow Group in 6 days, over asking.',
    description: 'A coastal-cool retreat moments from Sidney\'s waterfront promenade, boutiques and cafés. Sold in six days with multiple offers — a reflection of both the home and the strategy behind it.',
    features: [
      'Sold in 6 days, over asking',
      'Steps to Sidney waterfront',
      'Open-concept main floor',
      'Heat pump & EV charging',
      'Low-maintenance gardens',
      'Walk to shops & cafés',
    ],
    hero: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80',
    ],
  },
]

export const COMMUNITIES = [
  {
    name: 'Oak Bay',
    tagline: 'Tweed Curtain elegance by the sea',
    blurb: 'Tree-lined avenues, heritage homes and the genteel charm of Oak Bay Avenue — Victoria\'s most established seaside enclave.',
    stat: 'Median $2.1M',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Rockland',
    tagline: 'Historic grandeur, walkable to downtown',
    blurb: 'Stately estates and embassy-row character on the doorstep of the Art Gallery and Craigdarroch Castle.',
    stat: 'Median $1.8M',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Cordova Bay',
    tagline: 'Beach-town living, minutes from the city',
    blurb: 'Sandy shores, the Mattick\'s Farm village and family-friendly streets along the Saanich coastline.',
    stat: 'Median $1.6M',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Sidney-by-the-Sea',
    tagline: 'Walkable seaside town with island ferries',
    blurb: 'A vibrant waterfront promenade, independent bookshops and the gateway to the Southern Gulf Islands.',
    stat: 'Median $1.1M',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
  },
]

export const TESTIMONIALS = [
  {
    quote: 'Natalie sold our Oak Bay home for well over asking in under two weeks. Her marketing was on another level — the photography, the staging, the story she told about our home. Absolutely flawless.',
    name: 'James & Priya N.',
    area: 'Oak Bay',
  },
  {
    quote: 'We interviewed three agents. The Harlow Group were the only ones with a real plan. Calm, data-driven and genuinely kind through a stressful move. We cannot recommend them enough.',
    name: 'The Whitfield Family',
    area: 'Cordova Bay',
  },
  {
    quote: 'As first-time buyers we felt completely out of our depth. Natalie\'s team guided us through every step and negotiated a price we didn\'t think was possible. Forever grateful.',
    name: 'Daniel & Mei L.',
    area: 'Sidney',
  },
  {
    quote: 'Relocating from overseas, we bought our home before ever setting foot in Victoria. The virtual tours and honest advice made us feel completely confident. They earned a client for life.',
    name: 'Sophie & Marc D.',
    area: 'Rockland',
  },
]

export const AWARDS = [
  'Top 1% · Victoria Real Estate Board',
  "President's Award · 2024",
  'Three Best Rated · Victoria',
  'MLS® Platinum Award',
  'Forbes Global Properties Network',
]

export function formatPrice(n) {
  if (n >= 1000000) {
    const m = n / 1000000
    return '$' + (m % 1 === 0 ? m.toFixed(0) : m.toFixed(2)) + 'M'
  }
  return '$' + n.toLocaleString('en-CA')
}

export function getListingBySlug(slug) {
  return LISTINGS.find(l => l.slug === slug) || null
}

export function getFeaturedListings() {
  return SITE.featured.map(slug => getListingBySlug(slug)).filter(Boolean)
}
