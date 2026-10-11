import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cities, getCity, cityPath } from "@/lib/cities";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { Breadcrumbs, CTA, FAQ, JsonLd, businessSchema } from "../components";
import { Icon, serviceIcons, industryIcons } from "../icons";

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
      <section className={`city-hero${city.heroImage ? " has-image" : ""}`}>
        {city.heroImage && (
          <div className="city-hero-media">
            <Image src={city.heroImage} alt={city.heroAlt ?? `${city.name} city view`} fill priority sizes="100vw" />
          </div>
        )}
        <Breadcrumbs
          items={[
            { name: "Andhra Pradesh", href: "/seo-services-andhra-pradesh/" },
            { name: city.name, href: cityPath(city.slug) },
          ]}
        />
        <div className="container city-hero-content">
          <h1>
            SEO Services in <span className="accent">{city.name}</span>
          </h1>
          <p className="city-hero-intro">{city.intro}</p>
          <p className="telugu city-hero-telugu" lang="te">{city.teluguTagline}</p>
          <Link href="/free-seo-audit/" className="btn btn-icon">
            Get a Free SEO Audit for Your Business <Icon name="arrow" size={18} />
          </Link>
          <ul className="trust-row">
            <li>No obligation</li>
            <li>Custom strategy</li>
            <li>Telugu &amp; English</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">{city.name}'s business landscape</p>
            <h2>{city.landscapeTitle ?? `Doing business in ${city.name}`}</h2>
            <p className="muted">{city.economy}</p>
          </div>
          {city.stats && (
            <dl className="stats">
              {city.stats.map((s) => (
                <div key={s.label}>
                  <dt>{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div>
            <h2>How people search in {city.name}</h2>
            <p className="muted">
              Your customers in {city.name} search on Google before they call, visit or buy. Here is what that looks like
              locally:
            </p>
            <ul className="check small">
              {city.searchPatterns.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="panel">
            <h3>What this means for your SEO</h3>
            <ul className="check-filled">
              {city.localTips.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>SEO services for {city.name} businesses</h2>
          <p className="muted section-sub">
            End-to-end SEO to help your business rank higher, get more local enquiries and grow in {city.name}.
          </p>
          <div className="service-grid">
            {services.map((s) => (
              <Link key={s.slug} href={`/seo-services/${s.slug}/`} className="card icon-card">
                <span className="icon-circle"><Icon name={serviceIcons[s.slug] ?? "check"} /></span>
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
          <p className="muted section-sub">SEO for the industries that drive {city.name}'s economy.</p>
          <div className="industry-grid">
            {cityIndustries.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}/`} className="card industry-card">
                <span className="icon-circle small"><Icon name={industryIcons[i.slug] ?? "check"} size={16} /></span>
                <div>
                  <h3>{i.name}</h3>
                  <p>{i.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Areas served in and around {city.name}</h2>
          <p className="muted section-sub">
            SEO for businesses across {city.name}'s neighbourhoods and {city.district} district.
          </p>
          <ul className="tags pills">
            {city.areas.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
      </section>

      <FAQ items={city.faqs} wide />

      {nearby.length > 0 && (
        <section className="section">
          <div className="container">
            <h2>SEO services in nearby cities</h2>
            <p className="muted section-sub">I also help businesses grow across the rest of Andhra Pradesh.</p>
            <div className="nearby-grid">
              {nearby.map((c) => (
                <Link key={c.slug} href={cityPath(c.slug)} className="card nearby-card">
                  <h3>SEO in {c.name}</h3>
                  <p>{c.telugu}</p>
                </Link>
              ))}
              <Link href="/seo-services-andhra-pradesh/" className="card nearby-card">
                <h3>All Andhra Pradesh cities</h3>
                <p>See every city I serve</p>
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTA
        eyebrow={`Ready to grow your business in ${city.name}?`}
        title={`Get a free SEO audit for your ${city.name} business`}
        text="Find out what's holding your website back and get a clear, plain-language plan to attract more local customers."
      />
      <JsonLd
        data={businessSchema({
          areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: "Andhra Pradesh" } },
        })}
      />
    </>
  );
}
