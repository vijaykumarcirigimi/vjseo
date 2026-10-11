import { site } from "@/lib/site";
import { Breadcrumbs, PageHero } from "../components";

export const metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy/" },
};

export default function Privacy() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy-policy/" }]} />
      <PageHero title="Privacy Policy" />
      <section className="section">
        <div className="container narrow">
          <p>This policy explains how {site.name} ({site.url}) handles your information.</p>
          <h2>What we collect</h2>
          <p>
            When you submit a form, we collect the details you provide — such as your name, phone number, email, website,
            city and message. We use them only to respond to your enquiry and provide our services.
          </p>
          <h2>How we store it</h2>
          <p>Form submissions are sent to our business email inbox. We do not sell or share your information with third parties.</p>
          <h2>Analytics</h2>
          <p>We may use privacy-friendly analytics to understand how visitors use this website. This data is aggregated and does not identify you.</p>
          <h2>Your rights</h2>
          <p>
            You can ask us to access, correct or delete your information at any time by emailing{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
