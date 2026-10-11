import Link from "next/link";
import { cities, cityPath, upcomingCities } from "@/lib/cities";
import { Breadcrumbs, CTA, PageHero, JsonLd, businessSchema } from "../components";

export const metadata = {
  title: "SEO Services in Andhra Pradesh – All Cities",
  description:
    "SEO services across Andhra Pradesh: Visakhapatnam, Vijayawada, Guntur, Tirupati, Nellore, Rajahmundry, Kakinada, Kurnool and more. Local SEO, Telugu SEO and free audits.",
  alternates: { canonical: "/seo-services-andhra-pradesh/" },
};

const regions = ["Uttarandhra", "Coastal Andhra", "Rayalaseema"] as const;

export default function APHub() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Andhra Pradesh", href: "/seo-services-andhra-pradesh/" }]} />
      <PageHero
        title="SEO Services in Andhra Pradesh"
        sub="From Srikakulam to Chittoor, businesses across AP are competing for customers on Google. Here's how I help in every region."
      />

      <section className="section">
        <div className="container">
          {regions.map((r) => {
            const list = cities.filter((c) => c.region === r);
            if (!list.length) return null;
            return (
              <div key={r} style={{ marginBottom: 32 }}>
                <h2>{r}</h2>
                <div className="grid grid-3">
                  {list.map((c) => (
                    <Link key={c.slug} href={cityPath(c.slug)} className="card">
                      <h3>SEO Services in {c.name}</h3>
                      <p>{c.telugu} · {c.district} district</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section soft">
        <div className="container narrow">
          <h2>Other cities and towns I serve</h2>
          <p>Dedicated pages for these cities are coming soon — but I already work with businesses in all of them.</p>
          <ul className="tags">
            {upcomingCities.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>How SEO differs across Andhra Pradesh</h2>
          <p>
            <strong>Uttarandhra</strong> (Visakhapatnam, Vizianagaram, Srikakulam) mixes industrial B2B demand from the port
            and pharma clusters with strong tourism searches.
          </p>
          <p>
            <strong>Coastal Andhra</strong> (Vijayawada, Guntur, the Godavari districts, Nellore) is the most commercially
            competitive region — trade, hospitals, education, aquaculture and real estate around Amaravati.
          </p>
          <p>
            <strong>Rayalaseema</strong> (Tirupati, Kurnool, Kadapa, Anantapur) has pilgrim and tourism demand in Tirupati,
            plus growing local markets where many businesses still have no online presence — an early-mover opportunity.
          </p>
        </div>
      </section>

      <CTA />
      <JsonLd data={businessSchema({ areaServed: { "@type": "State", name: "Andhra Pradesh" } })} />
    </>
  );
}
