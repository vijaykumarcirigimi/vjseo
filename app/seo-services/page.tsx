import Link from "next/link";
import { services } from "@/lib/services";
import { Breadcrumbs, CTA, PageHero } from "../components";

export const metadata = {
  title: "SEO Services – Local, Technical, Telugu & AI Search SEO",
  description:
    "Complete SEO services for Andhra Pradesh businesses: local SEO, technical SEO, on-page SEO, link building, content, e-commerce SEO, Telugu SEO and AI search optimisation.",
  alternates: { canonical: "/seo-services/" },
};

export default function ServicesHub() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", href: "/seo-services/" }]} />
      <PageHero
        title="SEO Services"
        sub="Everything your business needs to rank on Google — choose a single service or a complete monthly plan."
      />
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/seo-services/${s.slug}/`} className="card">
                <h3>{s.name}</h3>
                <p>{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
