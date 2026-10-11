import { whatsappLink } from "@/lib/site";
import { Breadcrumbs, PageHero } from "../components";
import { EnquiryForm } from "../EnquiryForm";

export const metadata = {
  title: "Free SEO Audit for Andhra Pradesh Businesses",
  description:
    "Get a free SEO audit of your website and Google Business Profile. Clear action list, no obligation. For businesses in Vizag, Vijayawada, Guntur, Tirupati, Nellore and across AP.",
  alternates: { canonical: "/free-seo-audit/" },
};

export default function FreeAudit() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Free SEO Audit", href: "/free-seo-audit/" }]} />
      <PageHero
        title="Free SEO Audit"
        sub="Find out exactly why your business isn't showing up on Google, and what to fix first."
      />
      <section className="section">
        <div className="container narrow">
          <h2>What you'll get</h2>
          <ul className="check">
            <li>A check of your website's speed, mobile experience and indexing</li>
            <li>A review of your Google Business Profile (Maps listing)</li>
            <li>Where you rank today for your main keywords</li>
            <li>How you compare with 2–3 local competitors</li>
            <li>A short, prioritised list of fixes, useful whether or not you hire me</li>
          </ul>
          <p>No website yet? Request the audit anyway, I'll review your Google presence and competitors.</p>

          <h2 style={{ marginTop: 36 }}>Request your audit</h2>
          <EnquiryForm type="Free SEO Audit" />
          <p style={{ marginTop: 20 }}>
            Prefer WhatsApp? <a href={whatsappLink()} target="_blank" rel="noopener">Send me a message</a>.
          </p>
        </div>
      </section>
    </>
  );
}
