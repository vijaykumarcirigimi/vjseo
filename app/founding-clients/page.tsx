import { Breadcrumbs, PageHero } from "../components";
import { EnquiryForm } from "../EnquiryForm";

export const metadata = {
  title: "Founding Client Offer – Discounted SEO",
  description:
    "A limited founding client offer for Andhra Pradesh businesses: full SEO service at a reduced rate in return for permission to publish the results.",
  alternates: { canonical: "/founding-clients/" },
};

export default function FoundingClients() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Founding Clients", href: "/founding-clients/" }]} />
      <PageHero
        title="Founding Client Offer"
        sub="I'm building my portfolio of Andhra Pradesh case studies — and offering a small number of businesses full SEO at a reduced rate to do it."
      />
      <section className="section">
        <div className="container narrow">
          <h2>How it works</h2>
          <ol className="steps">
            <li><strong>Free audit first.</strong> I check your website and Google presence to make sure SEO can genuinely help you.</li>
            <li><strong>Reduced monthly fee.</strong> You get the full service at a founding-client discount for the first 3 months.</li>
            <li><strong>We record a baseline.</strong> Rankings, traffic and Google Maps calls on day one, so results are measurable.</li>
            <li><strong>You allow a case study.</strong> If results are good, I publish them (you can choose to stay anonymous) and you leave an honest Google review.</li>
          </ol>

          <h2>Who I'm looking for</h2>
          <ul className="check">
            <li>Businesses in Visakhapatnam, Vijayawada, Guntur, Tirupati or Nellore (other AP cities welcome)</li>
            <li>Clinics, coaching centres, real estate, restaurants, retail and service businesses</li>
            <li>Owners willing to respond to questions and share access to Google Business Profile and Search Console</li>
          </ul>
          <p>Spots are limited so I can give each founding client proper attention.</p>

          <h2 style={{ marginTop: 36 }}>Apply</h2>
          <EnquiryForm type="Founding Client Application" />
        </div>
      </section>
    </>
  );
}
