import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import PostPage from "@/pages/post";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import ResumePage from "./pages/resume";
import BlogPage from "./pages/blog";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<BlogPage />} path="/blog/" />
      <Route element={<PostPage />} path="/blog/:key" />
      <Route element={<AboutPage />} path="/about-me" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<ResumePage />} path="/resume" />
    </Routes>
  );
}

export default App;
