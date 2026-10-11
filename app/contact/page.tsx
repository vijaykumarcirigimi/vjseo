import { site, whatsappLink } from "@/lib/site";
import { Breadcrumbs, PageHero } from "../components";
import { EnquiryForm } from "../EnquiryForm";

export const metadata = {
  title: "Contact",
  description: `Contact ${site.name}, SEO expert in Andhra Pradesh. WhatsApp, phone or email.`,
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", href: "/contact/" }]} />
      <PageHero title="Contact" sub="The fastest way to reach me is WhatsApp. I usually reply within a few hours on working days." />
      <section className="section">
        <div className="container narrow">
          <div className="grid">
            <a className="card" href={whatsappLink("Hi, I have a question about SEO.")} target="_blank" rel="noopener">
              <h3>WhatsApp</h3>
              <p>{site.phoneDisplay}</p>
            </a>
            <a className="card" href={`tel:${site.phoneTel}`}>
              <h3>Call</h3>
              <p>{site.phoneDisplay}</p>
            </a>
            <a className="card" href={`mailto:${site.email}`}>
              <h3>Email</h3>
              <p>{site.email}</p>
            </a>
            <div className="card">
              <h3>Based in</h3>
              <p>{site.baseCity}, {site.region} — serving all of AP</p>
            </div>
          </div>

          <h2 style={{ marginTop: 40 }}>Send a message</h2>
          <EnquiryForm type="Contact" />
        </div>
      </section>
    </>
  );
}
