import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { article } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import { Chip } from "@nextui-org/chip";

import { type BlogPost } from "@/types";

export default function BlogPost(props: { post: BlogPost }) {
  const { post } = props;

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={article({ title: true })}>{post.title}</h1>
        </div>
        <div>
          {post.tags.map((tag, index) => (
            <Chip
              classNames={{
                base: "mx-1 border dark:border-white/50",
              }}
              key={index}
              variant="flat"
            >
              {tag}
            </Chip>
          ))}
        </div>
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={article({ subtitle: true })}>{post.subtitle}</h1>
        </div>
        <Markdown content={post.content} />
      </section>
    </DefaultLayout>
  );
}

function Markdown(props: { content: string }) {
  const { content } = props;
  return (
    <div className={article({ body: true })}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
