import { BlogPost } from "@/types";

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