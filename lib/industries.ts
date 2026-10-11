export type Industry = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  challenges: string[];
  approach: string[];
  cities: string[]; // city slugs where this industry is strong
};

export const industries: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    short: "For builders, developers and agents across Amaravati, Vizag and Vijayawada.",
    intro:
      "Property buyers research online for months before they visit a site. Real estate SEO puts your projects in front of them while they're comparing localities and builders.",
    challenges: [
      "Big property portals dominate the top results",
      "Every project needs its own page, but most builders have one generic site",
      "Buyers search by locality, budget and BHK — not by builder name",
    ],
    approach: [
      "Project and locality pages targeting \"flats in <area>\" and \"plots in <area>\" searches",
      "Google Business Profile for each site office",
      "Content comparing localities, approvals and infrastructure",
      "Schema and fast-loading galleries so pages work well on mobile",
    ],
    cities: ["visakhapatnam", "vijayawada", "guntur"],
  },
  {
    slug: "hospitals-clinics",
    name: "Hospitals & Clinics",
    short: "For hospitals, specialist clinics, dentists and diagnostic centres.",
    intro:
      "Patients search for a specialty and a city, then check reviews before they call. Healthcare SEO makes sure your hospital or clinic is the trusted answer.",
    challenges: [
      "Each specialty and doctor needs its own discoverable page",
      "Reviews heavily influence patient choice",
      "Medical content must be accurate and careful",
    ],
    approach: [
      "Specialty, treatment and doctor profile pages",
      "Google Business Profile optimisation per branch",
      "Genuine review collection process",
      "Telugu content for patients who prefer it",
    ],
    cities: ["guntur", "vijayawada", "visakhapatnam", "tirupati", "nellore"],
  },
  {
    slug: "education-coaching",
    name: "Education & Coaching",
    short: "For schools, colleges and coaching institutes.",
    intro:
      "Students and parents compare institutes online — courses, results, fees and reviews. Education SEO helps you get found well before admission season.",
    challenges: [
      "Demand is seasonal and competition peaks around admissions",
      "Course pages are often missing or thin",
      "Parents and students search differently",
    ],
    approach: [
      "Course and exam-specific pages",
      "Results and faculty pages that build trust",
      "Content calendar timed to admission cycles",
      "Local SEO for each branch",
    ],
    cities: ["vijayawada", "guntur", "tirupati", "nellore"],
  },
  {
    slug: "aquaculture-exports",
    name: "Aquaculture & Exports",
    short: "For hatcheries, feed suppliers, aqua labs and seafood exporters.",
    intro:
      "Andhra Pradesh is one of India's largest aquaculture regions. Buyers and farmers search online for suppliers — SEO helps your business reach them across India and abroad.",
    challenges: [
      "Most aqua businesses rely only on word of mouth",
      "Buyers are spread across states and countries",
      "Product information is rarely published online",
    ],
    approach: [
      "Product pages with clear specifications in English",
      "Export-focused keyword targeting",
      "Google Business Profile for walk-in farmers",
      "Telugu content for local farmer audiences",
    ],
    cities: ["nellore"],
  },
  {
    slug: "pharma-industrial",
    name: "Pharma & Industrial",
    short: "For manufacturers, suppliers and B2B service companies.",
    intro:
      "B2B buyers search for suppliers by product, specification and location. Industrial SEO helps manufacturers around Vizag, Sri City and other AP clusters win those enquiries.",
    challenges: [
      "Websites often show only a company profile, not products",
      "Buyers search by technical terms",
      "Long sales cycles need trust-building content",
    ],
    approach: [
      "Product and capability pages targeting technical keywords",
      "Certifications and quality information that buyers look for",
      "Enquiry-focused pages and fast mobile performance",
    ],
    cities: ["visakhapatnam", "tirupati"],
  },
  {
    slug: "hotels-tourism",
    name: "Hotels & Tourism",
    short: "For hotels, travel agents and tour operators.",
    intro:
      "Travellers plan Tirupati pilgrimages, Vizag beach holidays and Araku trips online. Tourism SEO helps you get direct bookings instead of paying commission on every guest.",
    challenges: [
      "Booking sites dominate hotel searches",
      "Visitors search from other states and in other languages",
      "Strong seasonality",
    ],
    approach: [
      "Pages targeting \"hotels near <landmark>\" and package searches",
      "Google Business Profile with photos, amenities and reviews",
      "Multi-language pages for out-of-state visitors",
      "Travel guide content that ranks before the trip",
    ],
    cities: ["tirupati", "visakhapatnam"],
  },
  {
    slug: "jewellery-textiles",
    name: "Jewellery & Textiles",
    short: "For jewellers, saree and handloom businesses.",
    intro:
      "From Vijayawada jewellers to Mangalagiri and Dharmavaram handlooms, buyers increasingly discover stores online before visiting or ordering.",
    challenges: [
      "Customers search by product style, not store name",
      "Online stores compete with national brands",
    ],
    approach: [
      "Collection and product pages with good images",
      "Local SEO for showrooms",
      "E-commerce SEO for online sales across India",
    ],
    cities: ["vijayawada"],
  },
  {
    slug: "restaurants-local-business",
    name: "Restaurants & Local Business",
    short: "For restaurants, shops and local service providers.",
    intro:
      "When someone searches \"biryani near me\" or \"AC repair in my area\", Google Maps decides who gets the order. Local SEO makes sure it's you.",
    challenges: [
      "Map listings are incomplete or unclaimed",
      "Few reviews compared to competitors",
      "No website or a very basic one",
    ],
    approach: [
      "Google Business Profile optimisation",
      "Review and photo strategy",
      "A simple, fast website with menu or service pages",
    ],
    cities: ["visakhapatnam", "vijayawada", "guntur", "tirupati", "nellore"],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
