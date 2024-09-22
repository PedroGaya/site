import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import ResumePage from "./pages/resume";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about-me" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<ResumePage />} path="/resume" />
    </Routes>
  );
}

export default App;
