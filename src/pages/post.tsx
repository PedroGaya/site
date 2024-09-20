import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function BlogPost(props: { content: string }) {
  const { content } = props;

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Post Name</h1>
        </div>
        <Markdown content={content} />
      </section>
    </DefaultLayout>
  );
}

function Markdown(props: { content: string }) {
  const { content } = props;
  return (
    <div className="prose lg:prose-xl">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
