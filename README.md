# vjseo.in — SEO Expert in Andhra Pradesh

Simple, mobile-friendly Next.js site. All pages are pre-rendered static HTML.

## Run locally
    npm install
    npm run dev        # http://localhost:3000

## Where to edit things
| What | File |
|---|---|
| Name, phone, WhatsApp, base city, prices | `lib/site.ts` |
| City pages (add a city = add one object) | `lib/cities.ts` |
| Service pages | `lib/services.ts` |
| Industry pages | `lib/industries.ts` |
| Your story / photo | `app/about/page.tsx` |
| Colours & layout | `app/globals.css` |

Search for `TODO` to find placeholders you must replace before launch.

## Contact forms
Forms email leads to hello@vjseo.in through Hostinger SMTP. Set `SMTP_PASSWORD` (see `.env.example`)
in your hosting environment variables. Without it, forms show an error asking people to use WhatsApp/email.

## DNS (keep your Hostinger email working)
When pointing vjseo.in to your hosting, change only the A / CNAME records for `@` and `www`.
Do NOT change the MX, TXT (SPF/DKIM/DMARC) records — they run your hello@vjseo.in mailbox.
