import { BlogPostPage } from "../components/post";
import { usePosts } from "@/hooks/use-query";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const posts = usePosts();
  const { key } = useParams();

  const post = posts.data?.filter((post) => post.key == key)[0];

  return <BlogPostPage post={post} />;
}
