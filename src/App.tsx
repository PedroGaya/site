import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about-me" />
      <Route element={<ContactPage />} path="/contact" />
    </Routes>
  );
}

export default App;
