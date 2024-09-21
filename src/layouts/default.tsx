import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen overflow-y-scroll">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <Divider />
      <footer className="w-full flex items-center justify-center py-3">
        <div className="flex items-center gap-1 text-current">
          <span className="text-default-600">
            <Link href={siteConfig.links.email}>email</Link> |{" "}
            <Link href={siteConfig.links.rss}>rss</Link> | © 2024 - present
          </span>
        </div>
      </footer>
    </div>
  );
}
