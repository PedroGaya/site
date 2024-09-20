import BlogPost from "./post";

export default function DocsPage() {
  const content = `
  Hello, this **video** is embeded from Youtube!

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

  const post = {
    title: "Blog Post",
    subtitle: "A test, in lorem ipsum. This blog post is not meant to be seen!",
    tags: ["test", "your", "stuff!"],
    content: content,
  };
  return <BlogPost post={post} />;
}
