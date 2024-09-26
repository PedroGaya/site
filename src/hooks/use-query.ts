import { BlogPost } from "@/types";

import { createQuery } from "react-query-kit";

// Hooks
export const useCategories = createQuery<string[], void, Error>({
  queryKey: ["/categories"],
  fetcher: fetchCategories,
  staleTime: 10 * 60 * 1000,
});

export const useSeries = createQuery<string[], void, Error>({
  queryKey: ["/series"],
  fetcher: fetchSeries,
  staleTime: 10 * 60 * 1000,
});

export const useTags = createQuery<string[], void, Error>({
  queryKey: ["/tags"],
  fetcher: fetchTags,
  staleTime: 10 * 60 * 1000,
});

export const usePosts = createQuery<BlogPost[], void, Error>({
  queryKey: ["/posts"],
  fetcher: fetchPosts,
  staleTime: 10 * 60 * 1000,
});

// Fetchers
export async function fetchCategories(): Promise<string[]> {
  const url = "http://localhost:3000/categories";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = (await response.json()) as string[];
  return data;
}

export async function fetchTags(): Promise<string[]> {
  const url = "http://localhost:3000/tags";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = (await response.json()) as string[];
  return data;
}

export async function fetchSeries(): Promise<string[]> {
  const url = "http://localhost:3000/series";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = (await response.json()) as string[];
  return data;
}

export async function fetchPosts(): Promise<BlogPost[]> {
  const url = "http://localhost:3000/posts";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = (await response.json()) as BlogPost[];
  return data;
}
