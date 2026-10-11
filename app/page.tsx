import Link from "next/link";
import { site } from "@/lib/site";
import { cities, cityPath } from "@/lib/cities";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { CTA, FAQ, JsonLd, businessSchema } from "./components";

export const metadata = {
  title: { absolute: `SEO Expert in Andhra Pradesh | ${site.name}` },
  alternates: { canonical: "/" },
};

const faqs = [
  { q: "What does an SEO expert do?", a: "An SEO expert improves your website and Google Business Profile so your business appears higher in Google search and Google Maps when customers look for your products or services." },
  { q: "Which cities in Andhra Pradesh do you cover?", a: "All of Andhra Pradesh. There are dedicated pages for Visakhapatnam, Vijayawada, Guntur, Tirupati and Nellore, and businesses in every other city and town are welcome." },
  { q: "How soon will I see results?", a: "Local SEO improvements often show within 2–3 months. Competitive keywords usually take 4–6 months. You'll get monthly reports so you can see progress." },
  { q: "Do you offer SEO in Telugu?", a: "Yes. Telugu SEO is a core service — many customers in AP search in Telugu and very few businesses target them." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container narrow">
          <h1>SEO Expert in Andhra Pradesh</h1>
          <p className="telugu">ఆంధ్రప్రదేశ్‌లో మీ వ్యాపారాన్ని Google లో ముందుకు తీసుకెళ్తాం</p>
          <p className="lead">
            Get your business found on Google and Google Maps in Visakhapatnam, Vijayawada, Guntur, Tirupati, Nellore and
            across AP. Honest, practical SEO from someone who knows the local market.
          </p>
          <div className="btn-row">
            <Link href="/free-seo-audit/" className="btn">Get a Free SEO Audit</Link>
            <Link href="/pricing/" className="btn btn-outline">See Pricing</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>SEO services in your city</h2>
          <div className="grid grid-3">
            {cities.map((c) => (
              <Link key={c.slug} href={cityPath(c.slug)} className="card">
                <h3>SEO in {c.name}</h3>
                <p>{c.telugu} · {c.region}</p>
              </Link>
            ))}
            <Link href="/seo-services-andhra-pradesh/" className="card">
              <h3>Other AP cities →</h3>
              <p>Rajahmundry, Kakinada, Kurnool, Kadapa, Anantapur and more</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <h2>What I can do for your business</h2>
          <div className="grid grid-3">
            {services.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/seo-services/${s.slug}/`} className="card">
                <h3>{s.name}</h3>
                <p>{s.short}</p>
              </Link>
            ))}
          </div>
          <p><Link href="/seo-services/">View all services →</Link></p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Why work with a local SEO expert?</h2>
          <ul className="check">
            <li><strong>I know AP search behaviour</strong> — Telugu searches, district towns, seasonal demand like admissions and pilgrim seasons.</li>
            <li><strong>Plain-language reporting</strong> — monthly reports and WhatsApp updates, no jargon.</li>
            <li><strong>No long lock-in contracts</strong> — month-to-month plans.</li>
            <li><strong>Safe, Google-approved methods</strong> — no spammy backlinks or tricks that risk penalties.</li>
            <li><strong>Direct access</strong> — you work with me, not a rotating account manager.</li>
          </ul>
          <p><Link href="/how-i-work/">See how I work →</Link></p>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <h2>Industries I help</h2>
          <ul className="tags">
            {industries.map((i) => (
              <li key={i.slug}><Link href={`/industries/${i.slug}/`}>{i.name}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Founding client offer</h2>
          <p>
            I'm taking on a small number of founding clients across Andhra Pradesh at a reduced rate, in return for
            permission to share the results as case studies.
          </p>
          <Link href="/founding-clients/" className="btn btn-outline">Learn about the offer</Link>
        </div>
      </section>

      <FAQ items={faqs} />
      <CTA />
      <JsonLd data={businessSchema({ areaServed: { "@type": "State", name: "Andhra Pradesh" } })} />
    </>
  );
}
