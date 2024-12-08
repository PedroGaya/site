import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import PostPage from "@/pages/post";
import AboutPage from "@/pages/about";
import BlogPage from "@/pages/blog";
import CurriculumPage from "@/pages/cv";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<BlogPage />} path="/blog/" />
      <Route element={<PostPage />} path="/blog/:key" />
      <Route element={<AboutPage />} path="/about-me" />
      <Route element={<CurriculumPage />} path="/cv" />
    </Routes>
  );
}

export default App;
