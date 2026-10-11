import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { cities, cityPath } from "@/lib/cities";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/seo-services-andhra-pradesh/",
    ...cities.map((c) => cityPath(c.slug)),
    "/seo-services/",
    ...services.map((s) => `/seo-services/${s.slug}/`),
    "/industries/",
    ...industries.map((i) => `/industries/${i.slug}/`),
    "/pricing/",
    "/free-seo-audit/",
    "/founding-clients/",
    "/how-i-work/",
    "/about/",
    "/contact/",
    "/privacy-policy/",
  ];
  return paths.map((p) => ({ url: `${site.url}${p}` }));
}
