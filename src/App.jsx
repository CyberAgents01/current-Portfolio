import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageShell } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App(){
  return <BrowserRouter><PageShell><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/projects/:slug" element={<ProjectDetail/>}/>
    <Route path="/experience" element={<Experience/>}/>
    <Route path="/education" element={<Education/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes></PageShell></BrowserRouter>;
}
