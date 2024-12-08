import { subtitle, title, article } from "@/components/primitives";
import { Avatar } from "@nextui-org/avatar";
import DefaultLayout from "@/layouts/default";
import { Link } from "@nextui-org/link";

import cv_en from "/cv-en.pdf";
import cv_pt from "/cv-pt.pdf";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>About Me</span>
          <div className="flex flex-row my-6">
            <Avatar
              isBordered={true}
              className="w-60 h-60 text-large mx-3"
              src=""
            />
            <div className={subtitle() + "mx-1"}>
              I'm a software developer and musician from Fortaleza, Brazil. I'm
              also interested in linguistics, chess and game design. On a daily
              basis, I work, play bass, play a couple games of chess and take
              care of my lovely pets.
            </div>
          </div>
          <div className={subtitle()}>
            Born in 2001, I begun programming at age 16, but only started as a
            professional at age 18, in 2019. Currently, I'm also a CS student
            working on my bachelor's degree. During this time, I've worked on{" "}
            <Link
              className="text-lg lg:text-xl"
              href="https://ieeexplore.ieee.org/document/10639578/"
            >
              research
            </Link>
            ,{" "}
            <Link className="text-lg lg:text-xl" href="https://pontedobem.org/">
              led software teams
            </Link>{" "}
            and gigged as a{" "}
            <Link
              className="text-lg lg:text-xl"
              href="https://www.linkedin.com/in/pedro-gaya/"
            >
              freelancer
            </Link>
            .
          </div>
          <div className="mt-20">
            <div className={article()}>
              For business concerns,{" "}
              <Link
                className={article()}
                href="mailto:pedrohenriquegaya@gmail.com"
              >
                email me
              </Link>
              {" or "}
              <Link
                className={article()}
                href="https://www.instagram.com/pedrohgayaw/"
              >
                talk to me on instagram
              </Link>
              .
            </div>
            <div className={article()}>
              If you're a recruiter, you can download my <i>curriculum vitae</i>{" "}
              in{" "}
              <Link className={article()} href={cv_en} target="_blank">
                english
              </Link>{" "}
              or{" "}
              <Link className={article()} href={cv_pt} target="_blank">
                portuguese
              </Link>{" "}
              for more details.
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
