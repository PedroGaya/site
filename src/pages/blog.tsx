import { BlogListItem } from "@/components/blog-list-item";
import { ButtonChip } from "@/components/button-chip";
import { useCategories, usePosts, useSeries, useTags } from "@/hooks/use-query";
import DefaultLayout from "@/layouts/default";
import { BlogPost } from "@/types";
import { Divider } from "@nextui-org/divider";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/spinner";

export default function BlogPage() {
  const posts = usePosts();

  const tags = useTags();
  const categories = useCategories();
  const series = useSeries();

  const [filter, setFilter] = useState("");
  const [displayPosts, setDisplayPosts] = useState<BlogPost[] | undefined>(
    posts.data
  );

  useEffect(() => {
    if (filter) {
      const filteredPosts = posts.data?.filter((post) => {
        const isInCategory = post.category === filter;
        const hasTag = post.tags.includes(filter);
        const isInSeries = post.series === filter;

        return isInCategory || isInSeries || hasTag;
      });

      setDisplayPosts(filteredPosts);
    } else {
      setDisplayPosts(posts.data);
    }
  }, [filter, posts.data]);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
        <div className="inline-block max-w-lg">
          {posts.isPending ? (
            <Spinner color="default" />
          ) : (
            <div>
              {" "}
              <div className="text-[1.5rem] leading-snug font-bold">Tags</div>
              <div className="my-5">
                {tags.data?.map((tag, index) => {
                  return (
                    <ButtonChip
                      content={tag}
                      onClick={() => {
                        setFilter(tag);
                      }}
                      key={index}
                    />
                  );
                })}
              </div>
              <div className="text-[1.5rem] leading-snug font-bold">
                Categories
              </div>
              <div className="my-5">
                {categories.data?.map((category, index) => {
                  return (
                    <ButtonChip
                      content={category}
                      onClick={() => {
                        setFilter(category);
                      }}
                      key={index}
                    />
                  );
                })}
              </div>
              <div className="text-[1.5rem] leading-snug font-bold">Series</div>
              <div className="my-5">
                {series.data?.map((series, index) => {
                  return (
                    <ButtonChip
                      content={series}
                      onClick={() => {
                        setFilter(series);
                      }}
                      key={index}
                    />
                  );
                })}
              </div>
              <Divider />
              <div className="my-5">
                {displayPosts?.map((post) => (
                  <BlogListItem post={post} key={post.key}></BlogListItem>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
