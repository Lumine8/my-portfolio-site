import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Blogs from "../Pages/Blogs/Blogs";
export default function NavRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Blogs" element={<Blogs />} />
      </Routes>
    </>
  );
}
