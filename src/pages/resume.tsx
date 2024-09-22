import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function ResumePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Résumé</span>
        </div>
      </section>
    </DefaultLayout>
  );
}
