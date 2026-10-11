export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  includes: string[];
  goodFor: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "local-seo",
    name: "Local SEO",
    short: "Show up on Google Maps and \"near me\" searches in your city.",
    intro:
      "Local SEO gets your business into the Google Maps results and the local pack — the first thing people see when they search for a service in their city. For most Andhra Pradesh businesses, this is where the phone calls come from.",
    includes: [
      "Google Business Profile setup, verification help and full optimisation",
      "Correct primary and secondary categories, services and service areas",
      "Local citations on trusted Indian directories with consistent name, address and phone",
      "Review strategy so you collect genuine reviews steadily",
      "Location pages on your website for each area you serve",
      "Monthly tracking of calls, direction requests and map rankings",
    ],
    goodFor: ["Clinics and hospitals", "Restaurants and shops", "Coaching centres", "Home services", "Any business with walk-in customers"],
    faqs: [
      { q: "Do I need a physical address for local SEO?", a: "To show in Google Maps you need a real address or a defined service area. Virtual offices are against Google's guidelines and can get a listing suspended." },
      { q: "Can I rank in a city where I don't have an office?", a: "Not in the Maps results, but you can rank in normal search results with a strong, genuinely useful page for that city." },
    ],
  },
  {
    slug: "technical-seo",
    name: "Technical SEO",
    short: "Fix speed, indexing and site errors that stop Google ranking you.",
    intro:
      "Technical SEO makes sure Google can crawl, understand and index your website — and that it loads fast on mobile data. Many AP business websites have problems here that quietly hold back every other SEO effort.",
    includes: [
      "Full crawl of your website to find broken pages, redirects and duplicates",
      "Core Web Vitals and mobile speed improvements",
      "Indexing checks in Google Search Console",
      "XML sitemap, robots.txt and canonical tag setup",
      "Structured data (schema) for your business, services and FAQs",
      "HTTPS, mobile usability and security checks",
    ],
    goodFor: ["Websites that aren't getting indexed", "Slow WordPress sites", "E-commerce stores", "Sites recently redesigned or migrated"],
    faqs: [
      { q: "How do I know if my site has technical problems?", a: "The free SEO audit includes a technical check. Common signs are pages missing from Google, slow mobile loading and sudden traffic drops." },
    ],
  },
  {
    slug: "on-page-seo",
    name: "On-Page SEO",
    short: "Optimise every page for the keywords your customers actually search.",
    intro:
      "On-page SEO aligns each page of your website with what customers are searching for — titles, headings, content, internal links and images — so Google knows exactly which searches each page should rank for.",
    includes: [
      "Keyword research in English and Telugu",
      "Title tags and meta descriptions that get clicks",
      "Heading structure and content improvements",
      "Internal linking between related pages",
      "Image optimisation and alt text",
      "Mapping one main keyword to each page to avoid pages competing with each other",
    ],
    goodFor: ["Businesses with a website but little traffic", "New websites", "Service businesses with many offerings"],
    faqs: [
      { q: "Will you rewrite my whole website?", a: "Usually not. Most gains come from improving existing pages and adding a few missing ones." },
    ],
  },
  {
    slug: "link-building",
    name: "Link Building",
    short: "Earn quality backlinks that build trust with Google.",
    intro:
      "Backlinks from relevant, trusted websites are still one of Google's strongest ranking signals. Link building is done safely — no spammy link packages that risk a penalty.",
    includes: [
      "Backlink audit of your site and competitors",
      "Local links from AP business directories, associations and news sites",
      "Guest articles on relevant industry websites",
      "Unlinked brand mention recovery",
      "Monthly report of every link built",
    ],
    goodFor: ["Competitive industries like real estate and healthcare", "Businesses targeting all of AP or India"],
    faqs: [
      { q: "Do you sell backlink packages?", a: "No. Cheap bulk backlinks often harm rankings. Every link is chosen for relevance and quality." },
    ],
  },
  {
    slug: "content-seo",
    name: "Content Writing for SEO",
    short: "Blog posts and pages that answer your customers' questions.",
    intro:
      "Content is how you rank for the hundreds of questions customers ask before they buy. Each article is planned around a real search, written for people first, and linked to your service pages.",
    includes: [
      "Content plan based on keyword research",
      "SEO blog articles and service page writing",
      "Telugu and English content options",
      "Updating old content that has lost rankings",
      "FAQ content designed to appear in Google and AI answers",
    ],
    goodFor: ["Hospitals and clinics", "Education", "Real estate", "B2B companies"],
    faqs: [
      { q: "Do you use AI to write content?", a: "AI tools may help with research, but every piece is edited and fact-checked by a person and written for your business specifically." },
    ],
  },
  {
    slug: "ecommerce-seo",
    name: "E-commerce SEO",
    short: "Rank product and category pages for buyers across India.",
    intro:
      "Online stores from Andhra Pradesh — sarees, jewellery, pickles, handicrafts, agri products — can sell across India. E-commerce SEO helps your category and product pages rank without paying for every click.",
    includes: [
      "Category and product page optimisation",
      "Product schema for prices, stock and reviews in search results",
      "Fixing duplicate content from filters and variants",
      "Site speed improvements for Shopify, WooCommerce and custom stores",
      "Buying-guide content that links to products",
    ],
    goodFor: ["Shopify and WooCommerce stores", "D2C brands", "Handloom and traditional product sellers"],
    faqs: [
      { q: "Which platforms do you work with?", a: "Shopify, WooCommerce, and most custom-built stores." },
    ],
  },
  {
    slug: "telugu-seo",
    name: "Telugu SEO",
    short: "Reach customers who search in Telugu — most competitors don't.",
    intro:
      "A growing share of searches in Andhra Pradesh happen in Telugu, often by voice. Very few local businesses have Telugu content, which makes it one of the easiest ways to stand out.",
    includes: [
      "Telugu keyword research (Telugu script and Telugu typed in English)",
      "Telugu versions of key pages, set up correctly with hreflang",
      "Bilingual FAQs on service and location pages",
      "Telugu Google Business Profile descriptions and posts",
      "Voice search optimisation",
    ],
    goodFor: ["Hospitals and clinics", "Local retail", "Agriculture-related businesses", "Government-facing services", "Family-oriented businesses"],
    faqs: [
      { q: "Should my whole site be in Telugu?", a: "Usually not. Most businesses do best with English pages plus Telugu versions of their most important pages." },
    ],
  },
  {
    slug: "ai-search-optimization",
    name: "AI Search Optimisation",
    short: "Get your business mentioned in ChatGPT, Gemini and Google AI Overviews.",
    intro:
      "More customers now ask ChatGPT, Gemini or Google's AI Overviews for recommendations. AI search optimisation makes your business easy for these systems to understand, trust and mention.",
    includes: [
      "Checking how AI tools currently describe your business",
      "Clear, factual pages AI systems can quote",
      "Structured data and consistent business details across the web",
      "Question-and-answer content for common customer questions",
      "Building mentions on sources AI tools rely on",
    ],
    goodFor: ["Businesses where customers research before buying", "Professional services", "Healthcare and education"],
    faqs: [
      { q: "Is this different from normal SEO?", a: "It builds on normal SEO. Strong SEO foundations come first, then content and mentions tailored to how AI tools pick their sources." },
    ],
  },
  {
    slug: "seo-audit",
    name: "SEO Audit",
    short: "A clear report of what's holding your website back — and how to fix it.",
    intro:
      "An SEO audit is a full health check of your website and Google presence. You get a prioritised list of problems and opportunities in plain language, not a 100-page tool export.",
    includes: [
      "Technical health and speed check",
      "Keyword and ranking review",
      "Google Business Profile review",
      "Competitor comparison in your city",
      "Prioritised action list you can use with or without hiring us",
    ],
    goodFor: ["Businesses unsure why they aren't ranking", "Before a website redesign", "After a traffic drop"],
    faqs: [
      { q: "Is the audit really free?", a: "A basic audit is free with no obligation. Request one on the free SEO audit page." },
    ],
  },
  {
    slug: "wordpress-seo",
    name: "WordPress SEO",
    short: "Speed, plugins and setup that make WordPress sites rank.",
    intro:
      "Most small business websites in AP run on WordPress — and many are slowed down by heavy themes and too many plugins. WordPress SEO fixes the setup so your site is fast and search-friendly.",
    includes: [
      "SEO plugin setup (Yoast / Rank Math) done properly",
      "Theme and plugin clean-up for speed",
      "Caching and image compression",
      "Permalink, sitemap and schema configuration",
      "Security and update hygiene",
    ],
    goodFor: ["Any business on WordPress", "Sites built by a freelancer and never optimised"],
    faqs: [
      { q: "Do I need to rebuild my WordPress site?", a: "Rarely. Most WordPress sites can be fixed without a rebuild." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
