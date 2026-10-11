import Link from "next/link";
import { industries } from "@/lib/industries";
import { Breadcrumbs, CTA, PageHero } from "../components";

export const metadata = {
  title: "SEO for Industries in Andhra Pradesh",
  description:
    "Industry-specific SEO for Andhra Pradesh businesses: real estate, hospitals, education, aquaculture, pharma, hotels, jewellery and local businesses.",
  alternates: { canonical: "/industries/" },
};

export default function IndustriesHub() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Industries", href: "/industries/" }]} />
      <PageHero
        title="SEO by Industry"
        sub="Every industry searches differently. Here's how SEO works for the sectors that drive Andhra Pradesh's economy."
      />
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {industries.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}/`} className="card">
                <h3>{i.name}</h3>
                <p>{i.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
