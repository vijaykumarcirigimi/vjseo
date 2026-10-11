// ============================================================
//  SITE SETTINGS, edit these values, everything else updates.
// ============================================================

export const site = {
  name: "VJ SEO",
  url: "https://vjseo.in",
  tagline: "SEO Expert in Andhra Pradesh",
  founder: "Vijay", // TODO: your full name as you want it shown
  email: "hello@vjseo.in",

  // TODO: replace with your real number (digits only for WhatsApp, with 91 country code)
  phoneDisplay: "+91 90000 00000",
  phoneTel: "+919000000000",
  whatsapp: "919000000000",

  // City you actually work from (used in schema + footer)
  baseCity: "Vijayawada", // TODO: change if you are based elsewhere
  region: "Andhra Pradesh",
};

export const whatsappLink = (text = "Hi, I'd like a free SEO audit for my business.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

// TODO: adjust prices to your own
export const plans = [
  {
    name: "Local Starter",
    price: "₹7,999",
    period: "/month",
    for: "Shops, clinics and service businesses targeting one city",
    features: [
      "Google Business Profile setup & optimisation",
      "Up to 10 target keywords",
      "On-page SEO for up to 5 pages",
      "Local citations (directories)",
      "Monthly report + WhatsApp updates",
    ],
  },
  {
    name: "Growth",
    price: "₹14,999",
    period: "/month",
    for: "Businesses targeting multiple cities or competitive keywords",
    features: [
      "Everything in Local Starter",
      "Up to 25 target keywords",
      "Technical SEO fixes",
      "2 SEO blog articles per month",
      "Quality link building",
      "Telugu + English keyword targeting",
    ],
    featured: true,
  },
  {
    name: "Custom",
    price: "Let's talk",
    period: "",
    for: "E-commerce, multi-location brands and large websites",
    features: [
      "Full SEO strategy & roadmap",
      "E-commerce / large site technical SEO",
      "Content plan and production",
      "AI search (ChatGPT, AI Overviews) optimisation",
      "Dedicated monthly strategy call",
    ],
  },
];
