import { Breadcrumbs, CTA, PageHero } from "../components";

export const metadata = {
  title: "How I Work – SEO Process",
  description: "A clear, step-by-step SEO process for Andhra Pradesh businesses — from free audit to monthly reporting.",
  alternates: { canonical: "/how-i-work/" },
};

export default function HowIWork() {
  return (
    <>
      <Breadcrumbs items={[{ name: "How I Work", href: "/how-i-work/" }]} />
      <PageHero title="How I Work" sub="No mystery, no jargon. Here's exactly what happens when you work with me." />
      <section className="section">
        <div className="container narrow">
          <ol className="steps">
            <li>
              <h3>Free audit & call</h3>
              <p>I review your website, Google Business Profile and local competitors, then walk you through what I found — in plain language.</p>
            </li>
            <li>
              <h3>Baseline & goals</h3>
              <p>We record where you stand today (rankings, traffic, calls, direction requests) and agree on realistic goals for 3 and 6 months.</p>
            </li>
            <li>
              <h3>Keyword & competitor research</h3>
              <p>I find what your customers actually search — in English and Telugu — and what it takes to beat the businesses ranking today.</p>
            </li>
            <li>
              <h3>Fix the foundations</h3>
              <p>Technical fixes, page speed, Google Business Profile optimisation and on-page improvements come first, because everything else builds on them.</p>
            </li>
            <li>
              <h3>Content & authority</h3>
              <p>New service and location pages, helpful articles, local citations and quality links that build Google's trust in your business.</p>
            </li>
            <li>
              <h3>Monthly reporting</h3>
              <p>A short monthly report showing what was done, what changed and what's next — plus WhatsApp updates in between.</p>
            </li>
          </ol>

          <h2>What I won't do</h2>
          <ul className="check">
            <li>Buy spammy backlink packages</li>
            <li>Create fake reviews or fake listings</li>
            <li>Promise "#1 on Google guaranteed" — nobody honest can</li>
            <li>Lock you into long contracts</li>
          </ul>
        </div>
      </section>
      <CTA />
    </>
  );
}
