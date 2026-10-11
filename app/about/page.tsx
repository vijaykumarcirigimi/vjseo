import { site } from "@/lib/site";
import { Breadcrumbs, CTA, PageHero, JsonLd } from "../components";

export const metadata = {
  title: "About – SEO Expert in Andhra Pradesh",
  description: `About ${site.founder}, the SEO expert behind ${site.name}, helping Andhra Pradesh businesses get found on Google.`,
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", href: "/about/" }]} />
      <PageHero title={`Hi, I'm ${site.founder}`} sub={`The SEO expert behind ${site.name}.`} />
      <section className="section">
        <div className="container narrow">
          {/* TODO: add your photo here, e.g. <img src="/vijay.jpg" alt="..." width={240} height={240} /> */}
          {/* TODO: replace the paragraphs below with your own story, real details build trust. */}
          <p>
            I help businesses across Andhra Pradesh get found on Google, from clinics in Guntur to real estate projects in
            Vizag and coaching centres in Vijayawada.
          </p>
          <p>
            I started {site.name} because most local businesses in AP are either invisible online or paying for SEO they
            don't understand. My approach is simple: explain everything in plain language, focus on what brings real
            enquiries, and never use tricks that put your business at risk.
          </p>
          <p>I speak Telugu and English, and understand how people in AP actually search.</p>

          <h2>Experience & certifications</h2>
          {/* TODO: list your real experience and certifications */}
          <ul className="check">
            <li>Years of hands-on SEO experience (add your number)</li>
            <li>Google Analytics certification (add once completed)</li>
            <li>Tools: Google Search Console, Google Analytics, Google Business Profile</li>
          </ul>
        </div>
      </section>
      <CTA title="Let's talk about your business" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.founder,
          jobTitle: "SEO Consultant",
          worksFor: { "@type": "Organization", name: site.name, url: site.url },
          knowsLanguage: ["en", "te"],
        }}
      />
    </>
  );
}
