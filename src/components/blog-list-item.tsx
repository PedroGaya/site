import { BlogPost } from "@/types";
import { blogListItem } from "./primitives";
import { Link } from "@nextui-org/link";

export function BlogListItem(props: { post: BlogPost }) {
  const { post } = props;

  return (
    <div className="flex-column mb-8">
      <div className="">
        <div className={blogListItem({ title: true })}>{post.title}</div>
        <div className={blogListItem({ date: true })}>
          {getMonthAndCategory(post)}
        </div>
      </div>
      <div className={blogListItem({ subtitle: true })}>{post.subtitle}</div>
      <div className={blogListItem({ readMore: true })}>
        <Link
          className={blogListItem({ readMore: true })}
          href={`/blog/${post.key}`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

function getMonthAndCategory(post: BlogPost): string {
  const year = new Date(post.createdAt).toLocaleString("default", {
    year: "numeric",
  });
  const month = new Date(post.createdAt).toLocaleString("default", {
    month: "short",
  });

  return `${month} ${year} in ${post.category}`;
}
