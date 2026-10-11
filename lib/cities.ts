// City pages are generated from this file.
// To add a city: copy one object, change every field, and it gets a page at /seo-services-<slug>/.
// Keep each city genuinely unique — Google filters near-duplicate "city name swap" pages.

export type City = {
  slug: string;
  name: string;
  telugu: string;
  region: "Uttarandhra" | "Coastal Andhra" | "Rayalaseema";
  district: string;
  intro: string;
  economy: string;
  industries: string[]; // industry slugs from lib/industries.ts
  areas: string[];
  searchPatterns: string[];
  localTips: string[];
  faqs: { q: string; a: string }[];
  nearby: string[]; // city slugs
};

export const cities: City[] = [
  {
    slug: "visakhapatnam",
    name: "Visakhapatnam",
    telugu: "విశాఖపట్నం",
    region: "Uttarandhra",
    district: "Visakhapatnam",
    intro:
      "Visakhapatnam (Vizag) is Andhra Pradesh's largest city and one of the most competitive search markets in the state. Whether you run a hospital in Seethammadhara, a real estate project in Madhurawada or a restaurant near RK Beach, your customers are searching on Google before they call anyone.",
    economy:
      "Vizag's economy runs on its port, the steel plant, the pharma cluster around Parawada, a growing IT corridor on the Rushikonda–Madhurawada hills, and tourism driven by the beaches and Araku Valley. That mix means search demand is split between B2B buyers (industrial suppliers, logistics, pharma services) and everyday local customers (hospitals, schools, restaurants, real estate).",
    industries: ["real-estate", "hospitals-clinics", "pharma-industrial", "hotels-tourism", "restaurants-local-business"],
    areas: [
      "MVP Colony", "Dwaraka Nagar", "Madhurawada", "Gajuwaka", "Seethammadhara", "Rushikonda",
      "Siripuram", "Akkayyapalem", "Pendurthi", "NAD Junction", "Kommadi", "Anakapalli",
    ],
    searchPatterns: [
      "\"near me\" searches tied to neighbourhoods — e.g. \"dentist in MVP Colony\", \"flats in Madhurawada\"",
      "Tourism searches from visitors planning trips — hotels, travel agents, Araku packages",
      "B2B searches for industrial suppliers, logistics and pharma services around the port and Parawada",
      "Real estate searches comparing localities along the Beach Road and Bhogapuram airport corridor",
    ],
    localTips: [
      "Vizag is spread out — a business in Gajuwaka and one in Madhurawada serve very different searchers, so pages and Google Business Profile categories should target your actual neighbourhood.",
      "Tourism-season traffic peaks in winter; hotels and travel businesses should have content indexed well before October.",
      "B2B companies here often rank on brand name only — targeting product and service keywords is usually an easy win.",
    ],
    faqs: [
      {
        q: "How long does SEO take for a business in Visakhapatnam?",
        a: "For local searches (Google Maps and \"near me\"), most businesses see movement within 2–3 months. Competitive keywords like real estate or hospitals in Vizag usually take 4–6 months of consistent work.",
      },
      {
        q: "Do you meet clients in Vizag in person?",
        a: "Most work happens over WhatsApp, phone and video calls, which keeps costs low. In-person meetings can be arranged when needed.",
      },
      {
        q: "Can you help my business show up on Google Maps in Vizag?",
        a: "Yes. Google Business Profile optimisation is usually the first step — correct categories, service areas, photos, reviews strategy and local citations.",
      },
    ],
    nearby: ["vijayawada", "nellore"],
  },
  {
    slug: "vijayawada",
    name: "Vijayawada",
    telugu: "విజయవాడ",
    region: "Coastal Andhra",
    district: "NTR",
    intro:
      "Vijayawada is the commercial heart of Andhra Pradesh — a city of traders, hospitals, coaching centres and fast-growing real estate next to the Amaravati capital region. If someone in Benz Circle or Patamata searches for what you sell, you should be in the top results.",
    economy:
      "Vijayawada is a trading and transport hub: wholesale markets, the Auto Nagar industrial area, one of the busiest railway junctions in South India, and a large education and coaching sector. Its proximity to Amaravati has pushed real estate, hospitals and professional services into higher competition online.",
    industries: ["education-coaching", "hospitals-clinics", "real-estate", "jewellery-textiles", "restaurants-local-business"],
    areas: [
      "Benz Circle", "Governorpet", "Patamata", "Labbipet", "Gunadala", "Moghalrajpuram",
      "Bhavanipuram", "Auto Nagar", "Poranki", "Kanuru", "Gollapudi", "Ibrahimpatnam",
    ],
    searchPatterns: [
      "Coaching and education searches — \"best coaching centre in Vijayawada\", entrance and competitive exam coaching",
      "Hospital and specialist searches from Vijayawada and surrounding towns in Krishna and NTR districts",
      "Real estate and plot searches around Amaravati, Poranki, Kanuru and Gollapudi",
      "Wholesale and trade searches from retailers across Coastal Andhra",
    ],
    localTips: [
      "Many Vijayawada searches come from nearby towns (Machilipatnam, Gudivada, Nuzvid) — service-area settings and content should cover them.",
      "Coaching centres compete heavily during admission season; content needs to be ranking months before results are announced.",
      "Bilingual (Telugu + English) pages perform well here, especially for hospitals and family-oriented services.",
    ],
    faqs: [
      {
        q: "What does SEO cost for a business in Vijayawada?",
        a: "Local SEO plans start from the Local Starter package on the pricing page. The final cost depends on how many keywords and locations you want to target.",
      },
      {
        q: "Can you help my coaching centre rank in Vijayawada?",
        a: "Yes. Education SEO focuses on course pages, results pages, Google Business Profile reviews and timing content around admission seasons.",
      },
      {
        q: "Should my website be in Telugu or English?",
        a: "For most Vijayawada businesses, English pages with Telugu sections or FAQs work best. Some audiences search entirely in Telugu — we check your keywords before deciding.",
      },
    ],
    nearby: ["guntur", "visakhapatnam"],
  },
  {
    slug: "guntur",
    name: "Guntur",
    telugu: "గుంటూరు",
    region: "Coastal Andhra",
    district: "Guntur",
    intro:
      "Guntur is known worldwide for its chilli market, but locally it is also a major medical and education centre. Patients, students and traders from across the district search online before choosing a hospital, college or supplier — SEO puts your business in front of them.",
    economy:
      "Guntur's economy combines agriculture trade (chilli, cotton, tobacco), a large concentration of hospitals and diagnostic centres, and a strong education sector. Its location inside the Amaravati capital region has also increased demand for real estate and professional services.",
    industries: ["hospitals-clinics", "education-coaching", "real-estate", "restaurants-local-business"],
    areas: [
      "Brodipet", "Arundelpet", "Lakshmipuram", "Kothapet", "Brindavan Gardens", "Pattabhipuram",
      "Nallapadu", "Gorantla", "Amaravati Road", "Mangalagiri", "Tenali", "Narasaraopet",
    ],
    searchPatterns: [
      "Hospital, specialist doctor and diagnostic centre searches from patients across Guntur and Palnadu districts",
      "Agri-trade searches — chilli exporters, cold storage, cotton and tobacco traders",
      "College, school and coaching searches during admission seasons",
      "Plot and apartment searches along the Amaravati and Mangalagiri corridor",
    ],
    localTips: [
      "Patients often search by specialty plus city (\"orthopaedic hospital Guntur\") — every specialty deserves its own page.",
      "Exporters and traders can reach national and international buyers with English product pages, not just local customers.",
      "Reviews matter enormously for Guntur hospitals and clinics; a structured review process is part of local SEO.",
    ],
    faqs: [
      {
        q: "Do you work with hospitals and clinics in Guntur?",
        a: "Yes. Healthcare SEO includes specialty pages, doctor profiles, Google Business Profile optimisation and review management, done carefully to follow medical advertising guidelines.",
      },
      {
        q: "Can SEO help an agri-export business in Guntur?",
        a: "Yes. Exporters benefit from English product pages targeting buyers outside Andhra Pradesh and India, plus technical SEO so those pages load fast and get indexed.",
      },
      {
        q: "Do you cover Tenali, Mangalagiri and Narasaraopet too?",
        a: "Yes. Businesses in these towns can target their own town and Guntur city searches.",
      },
    ],
    nearby: ["vijayawada", "nellore"],
  },
  {
    slug: "tirupati",
    name: "Tirupati",
    telugu: "తిరుపతి",
    region: "Rayalaseema",
    district: "Tirupati",
    intro:
      "Millions of pilgrims plan their Tirupati and Tirumala visits online — booking hotels, taxis, tour packages and restaurants from their phones. Tirupati is also a growing education and manufacturing centre. SEO helps local businesses capture both visitors and residents.",
    economy:
      "Tirupati's economy is driven by temple tourism to Tirumala, a strong education base (universities, IIT Tirupati, IISER), and industrial growth around Renigunta and the Sri City zone. Visitor-focused businesses compete for searches from across India, often in Telugu, Tamil, Kannada and Hindi.",
    industries: ["hotels-tourism", "education-coaching", "hospitals-clinics", "restaurants-local-business", "pharma-industrial"],
    areas: [
      "Tiruchanoor", "Renigunta", "Alipiri", "KT Road", "Air Bypass Road", "Balaji Colony",
      "MR Palli", "Bairagipatteda", "Leela Mahal Circle", "Korlagunta", "Chandragiri", "Srikalahasti",
    ],
    searchPatterns: [
      "Pilgrim searches — hotels near Alipiri or the bus stand, taxi to Tirumala, darshan tour packages",
      "Searches from other states in Tamil, Kannada and Hindi as well as Telugu and English",
      "Education searches for colleges, schools and coaching",
      "Industrial and B2B searches linked to Renigunta and Sri City",
    ],
    localTips: [
      "Visitor-facing businesses should target searches made before the trip (planning) and during it (\"near me\").",
      "Multi-language content can open up pilgrim traffic from Tamil Nadu and Karnataka that most competitors ignore.",
      "Accurate Google Maps listings with photos and opening hours matter a lot to travellers in an unfamiliar city.",
    ],
    faqs: [
      {
        q: "Can you help my hotel in Tirupati get more direct bookings?",
        a: "Yes. Hotel SEO targets searches like \"hotels near Tirumala bus stand\" so guests find and book you directly instead of only through commission-based booking sites.",
      },
      {
        q: "Should a Tirupati travel business have content in other languages?",
        a: "Often yes. Many pilgrims come from Tamil Nadu, Karnataka and North India, so a few key pages in their languages can bring traffic that competitors miss.",
      },
      {
        q: "How do I rank on Google Maps in Tirupati?",
        a: "Start with a complete, accurate Google Business Profile, consistent contact details across directories, regular photos, and a steady flow of genuine reviews.",
      },
    ],
    nearby: ["nellore", "vijayawada"],
  },
  {
    slug: "nellore",
    name: "Nellore",
    telugu: "నెల్లూరు",
    region: "Coastal Andhra",
    district: "SPSR Nellore",
    intro:
      "Nellore is a busy commercial city at the southern end of Coastal Andhra, known for its rice, aquaculture and the Krishnapatnam port. Local customers and B2B buyers both search online — SEO makes sure they find your business, not your competitor's.",
    economy:
      "Nellore's economy includes rice milling, shrimp and fish aquaculture, the Krishnapatnam port and power plants, plus a sizeable retail, healthcare and education market serving the whole district. Aquaculture and rice businesses have buyers far beyond Nellore, which makes national-level SEO valuable.",
    industries: ["aquaculture-exports", "hospitals-clinics", "education-coaching", "real-estate", "restaurants-local-business"],
    areas: [
      "Magunta Layout", "Dargamitta", "Vedayapalem", "Stonehousepet", "Balaji Nagar", "Haranathapuram",
      "Ramalingapuram", "Kovur", "Gudur", "Kavali", "Buchireddypalem", "Muthukur",
    ],
    searchPatterns: [
      "Aquaculture searches — shrimp feed, hatcheries, aqua labs and seafood exporters",
      "Rice mill and agri-trade searches from buyers across India",
      "Hospital, school and retail searches from across the district",
      "Real estate searches on the city's growing outskirts",
    ],
    localTips: [
      "Aqua and rice businesses usually target buyers outside Nellore — product pages in English with clear specifications rank well.",
      "District towns like Kavali and Gudur produce real search volume; service-area pages can capture it.",
      "Many Nellore businesses still don't have a website at all, so getting started early is a big advantage.",
    ],
    faqs: [
      {
        q: "Can SEO help my aquaculture business in Nellore?",
        a: "Yes. Aqua businesses benefit from product and service pages targeting farmers and buyers across Andhra Pradesh and beyond, plus Google Maps visibility for local walk-ins.",
      },
      {
        q: "My business has no website yet — can you still help?",
        a: "Yes. We can start with your Google Business Profile right away and build a simple, fast, SEO-ready website alongside it.",
      },
      {
        q: "Do you cover Kavali and Gudur?",
        a: "Yes. Businesses in district towns can target both their own town and Nellore city searches.",
      },
    ],
    nearby: ["tirupati", "guntur"],
  },
];

// Cities served without a dedicated page yet (shown on the state hub).
export const upcomingCities = [
  "Rajahmundry", "Kakinada", "Kurnool", "Kadapa", "Anantapur", "Amaravati", "Eluru", "Ongole",
  "Vizianagaram", "Srikakulam", "Bhimavaram", "Machilipatnam", "Chittoor", "Tenali", "Nandyal",
  "Proddatur", "Hindupur", "Anakapalli",
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);
export const cityPath = (slug: string) => `/seo-services-${slug}/`;
