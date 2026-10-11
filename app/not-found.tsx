import Link from "next/link";
import { PageHero } from "./components";

export default function NotFound() {
  return (
    <PageHero title="Page not found" sub="The page you're looking for doesn't exist or has moved.">
      <div className="btn-row">
        <Link href="/" className="btn">Go to home page</Link>
        <Link href="/seo-services-andhra-pradesh/" className="btn btn-outline">Browse cities</Link>
      </div>
    </PageHero>
  );
}
