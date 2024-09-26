import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
SyntaxHighlighter.registerLanguage("js", javascript);
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { Chip } from "@nextui-org/chip";

import { article } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import { type BlogPost } from "@/types";
import { useState } from "react";
import { LinkChip } from "@/components/link-chip";

export default function BlogPost(props: { post: BlogPost }) {
  const { post } = props;
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={article({ title: true })}>{post.title}</h1>
          <h1 className={article({ subtitle: true })}>{post.subtitle}</h1>
        </div>
        <Markdown content={post.content} />
        <div>
          {post.tags.map((tag, index) => (
            <LinkChip content={tag} link={"/blog"} key={index} />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}

function Markdown(props: { content: string }) {
  const { content } = props;

  const [copied, setCopied] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  return (
    <article className={article({ body: true })}>
      <ReactMarkdown
        children={content}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inlist, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const codeString = String(children).replace(/\n$/, "");

            return !inlist && match ? (
              <div className="relative">
                <button
                  className="absolute top-0 right-0 bg-transparent border border-white hover:bg-gray-700 text-xs px-2 py-1 rounded"
                  onClick={() => handleCopy(codeString)}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
                <SyntaxHighlighter
                  children={codeString}
                  style={okaidia}
                  language={match[1]}
                  PreTag="div"
                />
              </div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </article>
  );
}
