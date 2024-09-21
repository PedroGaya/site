import { title, subtitle, article } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Pedro H. Gaya</span>
          <div className={subtitle({ class: "mt-4" })}>I make stuff</div>
          <div className={article({ body: true })}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            tincidunt mattis orci non fermentum. Donec id erat eleifend,
            tincidunt ante sed, bibendum massa. Fusce a sodales dui, aliquet
            condimentum mauris. Vestibulum euismod tristique condimentum. Proin
            eget placerat tortor, vel maximus lectus. Praesent leo sem, varius
            non felis at, ultricies bibendum ex. Integer eu elementum elit, sed
            blandit justo. Suspendisse potenti. Proin nisi ligula, tincidunt
            dictum risus rhoncus, dapibus aliquet ante. Praesent fringilla
            cursus vulputate. Curabitur facilisis arcu at augue gravida, vel
            fringilla felis eleifend. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Aenean nec magna non orci ornare dignissim. Sed
            vel pulvinar sem. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Praesent tincidunt mattis orci non fermentum. Donec id erat
            eleifend, tincidunt ante sed, bibendum massa. Fusce a sodales dui,
            aliquet condimentum mauris. Vestibulum euismod tristique
            condimentum. Proin eget placerat tortor, vel maximus lectus.
            Praesent leo sem, varius non felis at, ultricies bibendum ex.
            Integer eu elementum elit, sed blandit justo. Suspendisse potenti.
            Proin nisi ligula, tincidunt dictum risus rhoncus, dapibus aliquet
            ante. Praesent fringilla cursus vulputate. Curabitur facilisis arcu
            at augue gravida, vel fringilla felis eleifend. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aenean nec magna
            non orci ornare dignissim. Sed vel pulvinar sem.
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
