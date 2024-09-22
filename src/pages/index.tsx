import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Card, CardFooter } from "@nextui-org/card";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
        <div className="flex flex-row items-center justify-center">
          <IntroductoryText />
          <CardGrid />
        </div>
        <Divider className="my-8" />
      </section>
    </DefaultLayout>
  );
}

function IntroductoryText() {
  return (
    <div className="inline-block max-w-lg text-center justify-center">
      <span className={title()}>Pedro H. Gaya</span>
      <div className={subtitle({ class: "mt-4" })}>
        I make stuff, including music, software and articles.
      </div>
      <div className={subtitle({ class: "mt-4" })}>
        On this site, you will find my{" "}
        <Link className="text-lg lg:text-xl" href="/blog">
          writings
        </Link>{" "}
        about technical topics and personal projects, as well as music and other
        such things. You can also learn more{" "}
        <Link className="text-lg lg:text-xl" href="/about-me">
          about me
        </Link>{" "}
        or find my{" "}
        <Link className="text-lg lg:text-xl" href="/contact">
          contact information
        </Link>
        .
      </div>
    </div>
  );
}

function CardGrid() {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-1 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Image
          removeWrapper
          alt="Me, playing bass."
          className="z-0 w-full h-full object-cover"
          src="/me.jpg"
        />
        <CardFooter className="absolute bg-neutral-400/80 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny font-bold">
              Me, playing bass at an event.
            </p>
          </div>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Image
          removeWrapper
          alt="The cats, looking cute."
          className="z-0 w-full h-full object-cover"
          src="/my-cats.jpg"
        />
        <CardFooter className="absolute bg-neutral-400/80 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny font-bold">
              My cats, looking cute.
            </p>
          </div>
        </CardFooter>
      </Card>{" "}
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Image
          removeWrapper
          alt="The dog, looking goofy."
          className="z-0 w-full h-full object-cover"
          src="/my-dog.jpg"
        />
        <CardFooter className="absolute bg-neutral-400/80 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny font-bold">
              My dog, looking goofy.
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
