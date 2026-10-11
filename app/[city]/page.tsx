import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cities, getCity, cityPath } from "@/lib/cities";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { Breadcrumbs, CTA, FAQ, PageHero, JsonLd, businessSchema } from "../components";

// Only the cities in lib/cities.ts get pages; every other URL here is a 404.
export const dynamicParams = false;

const PREFIX = "seo-services-";

export function generateStaticParams() {
  return cities.map((c) => ({ city: PREFIX + c.slug }));
}

function cityFromParam(param: string) {
  return param.startsWith(PREFIX) ? getCity(param.slice(PREFIX.length)) : undefined;
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const city = cityFromParam((await params).city);
  if (!city) return {};
  return {
    title: `SEO Services in ${city.name} – Local SEO Expert`,
    description: `SEO expert for ${city.name} businesses. Rank on Google and Google Maps in ${city.areas.slice(0, 3).join(", ")} and across ${city.district} district. Free SEO audit.`,
    alternates: { canonical: cityPath(city.slug) },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const city = cityFromParam((await params).city);
  if (!city) notFound();

  const cityIndustries = industries.filter((i) => city.industries.includes(i.slug));
  const nearby = cities.filter((c) => city.nearby.includes(c.slug));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Andhra Pradesh", href: "/seo-services-andhra-pradesh/" },
          { name: city.name, href: cityPath(city.slug) },
        ]}
      />
      <PageHero title={`SEO Services in ${city.name}`} sub={city.intro}>
        <p className="telugu">{city.telugu}లో SEO సేవలు</p>
        <div className="btn-row">
          <Link href="/free-seo-audit/" className="btn">Free SEO Audit for {city.name} Businesses</Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container narrow">
          <h2>{city.name}'s business landscape</h2>
          <p>{city.economy}</p>
        </div>
      </section>

      <section className="section soft">
        <div className="container narrow">
          <h2>How people search in {city.name}</h2>
          <ul className="check">
            {city.searchPatterns.map((s) => <li key={s}>{s}</li>)}
          </ul>
          <h3 style={{ marginTop: 28 }}>What this means for your SEO</h3>
          <ul className="check">
            {city.localTips.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>SEO services for {city.name} businesses</h2>
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

      <section className="section soft">
        <div className="container">
          <h2>Industries I work with in {city.name}</h2>
          <div className="grid grid-3">
            {cityIndustries.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}/`} className="card">
                <h3>{i.name}</h3>
                <p>{i.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Areas served in and around {city.name}</h2>
          <ul className="tags">
            {city.areas.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
      </section>

      <FAQ items={city.faqs} />

      {nearby.length > 0 && (
        <section className="section soft">
          <div className="container">
            <h2>SEO services in nearby cities</h2>
            <div className="grid grid-3">
              {nearby.map((c) => (
                <Link key={c.slug} href={cityPath(c.slug)} className="card">
                  <h3>SEO in {c.name}</h3>
                  <p>{c.telugu}</p>
                </Link>
              ))}
              <Link href="/seo-services-andhra-pradesh/" className="card">
                <h3>All Andhra Pradesh cities</h3>
                <p>See every city I serve</p>
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTA title={`Want more customers from ${city.name}?`} />
      <JsonLd
        data={businessSchema({
          areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: "Andhra Pradesh" } },
        })}
      />
    </>
  );
}
