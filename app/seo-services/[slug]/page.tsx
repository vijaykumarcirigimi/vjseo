import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getService } from "@/lib/services";
import { cities, cityPath } from "@/lib/cities";
import { site } from "@/lib/site";
import { Breadcrumbs, CTA, FAQ, PageHero, JsonLd } from "../../components";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: `${s.name} Services in Andhra Pradesh`,
    description: `${s.short} ${s.name} for businesses in Visakhapatnam, Vijayawada, Guntur, Tirupati, Nellore and across AP.`,
    alternates: { canonical: `/seo-services/${s.slug}/` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const others = services.filter((o) => o.slug !== s.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs items={[{ name: "Services", href: "/seo-services/" }, { name: s.name, href: `/seo-services/${s.slug}/` }]} />
      <PageHero title={`${s.name} Services in Andhra Pradesh`} sub={s.intro}>
        <div className="btn-row">
          <Link href="/free-seo-audit/" className="btn">Get a Free Audit</Link>
          <Link href="/pricing/" className="btn btn-outline">See Pricing</Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container narrow">
          <h2>What's included</h2>
          <ul className="check">
            {s.includes.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
      </section>

      <section className="section soft">
        <div className="container narrow">
          <h2>Who it's for</h2>
          <ul className="tags">
            {s.goodFor.map((g) => <li key={g}>{g}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>{s.name} in your city</h2>
          <ul className="tags">
            {cities.map((c) => (
              <li key={c.slug}><Link href={cityPath(c.slug)}>{c.name}</Link></li>
            ))}
            <li><Link href="/seo-services-andhra-pradesh/">All AP cities</Link></li>
          </ul>
        </div>
      </section>

      <FAQ items={s.faqs} />

      <section className="section soft">
        <div className="container">
          <h2>Related services</h2>
          <div className="grid grid-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/seo-services/${o.slug}/`} className="card">
                <h3>{o.name}</h3>
                <p>{o.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.name,
          description: s.intro,
          provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
          areaServed: { "@type": "State", name: "Andhra Pradesh" },
        }}
      />
    </>
  );
}
