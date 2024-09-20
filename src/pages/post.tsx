import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function BlogPost() {
  const md = `
        Hello this **video** is embeded from Youtube!
    
        <div style="display: flex; justify-content: center;">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JQvc-Gkwhow?si=eFOjL6lGKQXFZmHJ" title="My Favorite Things" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mattis orci non fermentum. Donec id erat eleifend, tincidunt ante sed, bibendum massa. Fusce a sodales dui, aliquet condimentum mauris. Vestibulum euismod tristique condimentum. Proin eget placerat tortor, vel maximus lectus. Praesent leo sem, varius non felis at, ultricies bibendum ex. Integer eu elementum elit, sed blandit justo. Suspendisse potenti. Proin nisi ligula, tincidunt dictum risus rhoncus, dapibus aliquet ante. Praesent fringilla cursus vulputate. Curabitur facilisis arcu at augue gravida, vel fringilla felis eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec magna non orci ornare dignissim. Sed vel pulvinar sem.
        
        \`\`\`js
        function test() {
            console.log("notice the blank line before this function?");
        }
        \`\`\`
        `;

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Post Name</h1>
        </div>
        <Markdown content={md} />
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
