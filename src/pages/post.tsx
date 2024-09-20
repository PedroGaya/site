import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import { type BlogPost } from "@/types";

export default function BlogPost(props: { post: BlogPost }) {
  const { post } = props;

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>{post.title}</h1>
        </div>
        {post.subtitle ?? (
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={subtitle()}>{post.subtitle}</h1>
          </div>
        )}
        <Markdown content={post.content} />
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
