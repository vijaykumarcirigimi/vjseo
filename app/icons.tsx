// Small inline line icons (24px grid, stroke-based) so pages need no icon library.

const paths: Record<string, React.ReactNode> = {
  pin: <><path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" /></>,
  page: <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v5h6M16 13H8M16 17H8M10 9H8" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.8 1.7" /><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" /></>,
  pen: <><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.4 2.6a2.1 2.1 0 1 1 3 3L12 15l-4 1 1-4Z" /></>,
  cart: <><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2 2h2l2.7 12.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L22 7H5.1" /></>,
  language: <path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />,
  sparkle: <><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
  layout: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></>,
  chart: <path d="M3 3v18h18M7 16v-3M12 16V9M17 16V5" />,
  trend: <path d="m22 7-8.5 8.5-5-5L2 17M16 7h6v6" />,
  check: <path d="m5 12 5 5L20 7" />,
  arrow: <path d="M5 12h14M12 5l7 7-7 7" />,
  building: <><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" /></>,
  medical: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M12 8v8M8 12h8" /></>,
  education: <><path d="M22 10 12 5 2 10l10 5Z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>,
  fish: <><path d="M6.5 12C7.4 8.5 11.4 6 15 6s6 2.5 7 6c-1 3.5-3.4 6-7 6s-7.6-2.5-8.5-6Z" /><path d="M18 12h.01M2 7c1.5 1.5 3 3 4.5 5C5 14 3.5 15.5 2 17" /></>,
  factory: <path d="M2 20V9l6 4V9l6 4V4h4l2 16ZM2 20h20" />,
  bed: <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />,
  gem: <><path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M2 9h20M12 22 8 9l4-6 4 6-4 13" /></>,
  food: <path d="M3 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3Zm0 0v7" />,
};

export type IconName = keyof typeof paths;

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export const serviceIcons: Record<string, IconName> = {
  "local-seo": "pin",
  "technical-seo": "gear",
  "on-page-seo": "page",
  "link-building": "link",
  "content-seo": "pen",
  "ecommerce-seo": "cart",
  "telugu-seo": "language",
  "ai-search-optimization": "sparkle",
  "seo-audit": "search",
  "wordpress-seo": "layout",
};

export const industryIcons: Record<string, IconName> = {
  "real-estate": "building",
  "hospitals-clinics": "medical",
  "education-coaching": "education",
  "aquaculture-exports": "fish",
  "pharma-industrial": "factory",
  "hotels-tourism": "bed",
  "jewellery-textiles": "gem",
  "restaurants-local-business": "food",
};
