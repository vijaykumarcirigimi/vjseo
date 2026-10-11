import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { cities, cityPath } from "@/lib/cities";
import { services } from "@/lib/services";
import { MobileMenu } from "./MobileMenu";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const nav = [
  { href: "/seo-services/", label: "Services" },
  { href: "/seo-services-andhra-pradesh/", label: "Cities" },
  { href: "/industries/", label: "Industries" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          {site.name}
        </Link>
        <nav className="nav-desktop" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
          <Link href="/free-seo-audit/" className="btn btn-small">
            Free Audit
          </Link>
        </nav>
        <MobileMenu>
          <summary aria-label="Open menu">Menu</summary>
          <nav aria-label="Mobile">
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
            <Link href="/free-seo-audit/" className="btn">
              Get a Free SEO Audit
            </Link>
          </nav>
        </MobileMenu>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="logo">{site.name}</p>
          <p>{site.tagline}. Helping businesses across Andhra Pradesh get found on Google.</p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
          </p>
        </div>
        <div>
          <p className="footer-title">Cities</p>
          <ul>
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={cityPath(c.slug)}>SEO in {c.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/seo-services-andhra-pradesh/">All of Andhra Pradesh</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Services</p>
          <ul>
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/seo-services/${s.slug}/`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-title">Company</p>
          <ul>
            <li><Link href="/about/">About</Link></li>
            <li><Link href="/how-i-work/">How I Work</Link></li>
            <li><Link href="/founding-clients/">Founding Clients</Link></li>
            <li><Link href="/pricing/">Pricing</Link></li>
            <li><Link href="/contact/">Contact</Link></li>
            <li><Link href="/privacy-policy/">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a className="wa-float" href={whatsappLink()} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      WhatsApp
    </a>
  );
}

export function CTA({ title = "Get a free SEO audit for your business", text }: { title?: string; text?: string }) {
  return (
    <section className="cta">
      <div className="container">
        <h2>{title}</h2>
        <p>{text ?? "Find out what's stopping your website from ranking — with a clear, plain-language action list. No obligation."}</p>
        <div className="btn-row">
          <Link href="/free-seo-audit/" className="btn btn-light">
            Request Free Audit
          </Link>
          <a href={whatsappLink()} className="btn btn-outline-light" target="_blank" rel="noopener">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="section">
      <div className="container narrow">
        <h2>Frequently asked questions</h2>
        {items.map((f) => (
          <details key={f.q} className="faq">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav className="breadcrumbs container" aria-label="Breadcrumb">
        {all.map((b, i) =>
          i < all.length - 1 ? (
            <span key={b.href}>
              <Link href={b.href}>{b.name}</Link> ›{" "}
            </span>
          ) : (
            <span key={b.href} aria-current="page">{b.name}</span>
          )
        )}
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((b, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: b.name,
            item: `${site.url}${b.href}`,
          })),
        }}
      />
    </>
  );
}

export function PageHero({ title, sub, children }: { title: string; sub?: string; children?: React.ReactNode }) {
  return (
    <section className="hero">
      <div className="container narrow">
        <h1>{title}</h1>
        {sub && <p className="lead">{sub}</p>}
        {children}
      </div>
    </section>
  );
}

export function businessSchema(extra: Record<string, unknown> = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.baseCity,
      addressRegion: site.region,
      addressCountry: "IN",
    },
    ...extra,
  };
}
