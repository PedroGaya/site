import { create } from "zustand";
import { BlogPost } from "../types";

interface BlogState {
  blog: {
    categories: string[];
    series: string[];
    tags: string[];
    posts: BlogPost[];
  };
  updateState: () => Promise<void>;
}

export const useBlogStore = create<BlogState>()((set) => ({
  blog: {
    categories: [],
    series: [],
    tags: [],
    posts: [],
  },
  updateState: async () => {
    const categories = await fetchCategories();
    const series = await fetchSeries();
    const tags = await fetchTags();
    const posts = await fetchPosts();

    set((_state) => {
      return {
        blog: {
          categories,
          series,
          tags,
          posts,
        },
      };
    });
  },
}));

async function fetchCategories(): Promise<string[]> {
  const url = "http://localhost:3000/categories";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = (await response.json()) as string[];
  return data;
}

async function fetchTags(): Promise<string[]> {
  const url = "http://localhost:3000/tags";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = (await response.json()) as string[];
  return data;
}

async function fetchSeries(): Promise<string[]> {
  const url = "http://localhost:3000/series";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = (await response.json()) as string[];
  return data;
}

async function fetchPosts(): Promise<BlogPost[]> {
  const url = "http://localhost:3000/posts";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = (await response.json()) as BlogPost[];
  return data;
}
