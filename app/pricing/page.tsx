import Link from "next/link";
import { plans } from "@/lib/site";
import { Breadcrumbs, CTA, FAQ, PageHero } from "../components";

export const metadata = {
  title: "SEO Pricing & Packages in Andhra Pradesh",
  description: "Simple monthly SEO packages for Andhra Pradesh businesses. No long contracts. Local SEO from ₹7,999/month.",
  alternates: { canonical: "/pricing/" },
};

const faqs = [
  { q: "Is there a minimum contract?", a: "No long lock-in. Plans are month-to-month, though SEO works best when you commit to at least 3–6 months." },
  { q: "Are there any setup fees?", a: "No hidden setup fees. One-off work like a website rebuild is quoted separately and agreed upfront." },
  { q: "Do prices include GST?", a: "Prices shown are before GST, which is added where applicable." },
  { q: "Can I get a one-time service instead of a monthly plan?", a: "Yes — SEO audits, Google Business Profile setup and technical fixes can be done as one-time projects." },
];

export default function Pricing() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Pricing", href: "/pricing/" }]} />
      <PageHero title="SEO Pricing" sub="Simple, transparent monthly plans. No long contracts, no hidden fees." />
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {plans.map((p) => (
              <div key={p.name} className={`card${p.featured ? " featured" : ""}`}>
                <h3>{p.name}</h3>
                <p className="price">{p.price} <small>{p.period}</small></p>
                <p>{p.for}</p>
                <ul className="check" style={{ marginTop: 16 }}>
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Link href="/free-seo-audit/" className={`btn${p.featured ? "" : " btn-outline"}`}>Start with a free audit</Link>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            Just starting out? Ask about the <Link href="/founding-clients/">founding client offer</Link>.
          </p>
        </div>
      </section>
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
