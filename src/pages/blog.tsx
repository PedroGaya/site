import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useSearchParams } from "react-router-dom";

export default function BlogPage() {
  const [searchParams, _setSearchParams] = useSearchParams();

  const tags = searchParams.get("tags")
    ? searchParams.get("tags")?.split(",")
    : [];
  const categories = searchParams.get("categories")
    ? searchParams.get("categories")?.split(",")
    : [];
  const series = searchParams.get("series")
    ? searchParams.get("series")?.split(",")
    : [];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Blog</span>
        </div>
      </section>
    </DefaultLayout>
  );
}
