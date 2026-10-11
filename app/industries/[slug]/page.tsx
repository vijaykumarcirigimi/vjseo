import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { industries, getIndustry } from "@/lib/industries";
import { cities, cityPath } from "@/lib/cities";
import { Breadcrumbs, CTA, PageHero } from "../../components";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const i = getIndustry((await params).slug);
  if (!i) return {};
  return {
    title: `SEO for ${i.name} in Andhra Pradesh`,
    description: `${i.short} SEO that brings enquiries from Google search and Google Maps across Andhra Pradesh.`,
    alternates: { canonical: `/industries/${i.slug}/` },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const i = getIndustry((await params).slug);
  if (!i) notFound();
  const strongCities = cities.filter((c) => i.cities.includes(c.slug));

  return (
    <>
      <Breadcrumbs items={[{ name: "Industries", href: "/industries/" }, { name: i.name, href: `/industries/${i.slug}/` }]} />
      <PageHero title={`SEO for ${i.name} in Andhra Pradesh`} sub={i.intro}>
        <div className="btn-row">
          <Link href="/free-seo-audit/" className="btn">Get a Free Audit</Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container narrow">
          <h2>Common SEO challenges</h2>
          <ul className="check">
            {i.challenges.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </section>

      <section className="section soft">
        <div className="container narrow">
          <h2>How I approach {i.name.toLowerCase()} SEO</h2>
          <ul className="check">
            {i.approach.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
      </section>

      {strongCities.length > 0 && (
        <section className="section">
          <div className="container narrow">
            <h2>{i.name} SEO by city</h2>
            <ul className="tags">
              {strongCities.map((c) => (
                <li key={c.slug}><Link href={cityPath(c.slug)}>{c.name}</Link></li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
