import { BlogPost as BP } from "@/types";
import BlogPost from "./post";

export default function DocsPage() {
  const content = `
  Hello, this **video** is embeded from Youtube!

  <div style="display: flex; justify-content: center;">
    <iframe width="90%" height="315" src="https://www.youtube.com/embed/JQvc-Gkwhow?si=eFOjL6lGKQXFZmHJ" title="My Favorite Things" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mattis orci non fermentum. Donec id erat eleifend, tincidunt ante sed, bibendum massa. Fusce a sodales dui, aliquet condimentum mauris. Vestibulum euismod tristique condimentum. Proin eget placerat tortor, vel maximus lectus. Praesent leo sem, varius non felis at, ultricies bibendum ex. Integer eu elementum elit, sed blandit justo. Suspendisse potenti. Proin nisi ligula, tincidunt dictum risus rhoncus, dapibus aliquet ante. Praesent fringilla cursus vulputate. Curabitur facilisis arcu at augue gravida, vel fringilla felis eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec magna non orci ornare dignissim. Sed vel pulvinar sem.
  
  \`\`\`js
    function test() {
      console.log("wowzers!");
    }
  \`\`\`

  And here's a [google link!](https://google.com)

  [Home](/) links too!

  > Blockquotes?
  >
  >> They work too.

  1. I
  2. Love 
  3. Lists!

  - Even
  - The
  - Unordered
    - Ones!

  ![image](https://preview.redd.it/ux9kq212n5qd1.png?auto=webp&s=0f9c38f044c1433b9428f170d1f7b672f4ead89f)
  `;

  const post: BP = {
    createdAt: new Date("2024-09-25T19:07:18.826Z"),
    title: "Blog Post",
    key: "blog-post-1",
    subtitle:
      "A test, in lorem ipsum. This blog post is not meant to be seen! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mattis orci non fermentum.",
    tags: ["test", "your", "stuff!"],
    content: content,
    category: "test",
    series: "test",
  };
  return <BlogPost post={post} />;
}
