import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Download, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/profile";

const links = [
  ["Home", "/"], ["About", "/about"], ["Skills", "/skills"],
  ["Projects", "/projects"], ["Experience", "/experience"],
  ["Education", "/education"], ["Contact", "/contact"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);

  return <header className="site-header">
    <nav className="nav-shell container" aria-label="Main navigation">
      <Link to="/" className="brand" aria-label="Ankush Patil home">
        <span className="brand-mark">AP<span>.</span></span>
        <span className="brand-name">ANKUSH PATIL<small>IT INFRASTRUCTURE</small></span>
      </Link>
      <button className="mobile-toggle icon-button" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
        {open ? <X size={21}/> : <Menu size={21}/>}
      </button>
      <div className={`nav-links ${open ? "is-open" : ""}`}>
        {links.map(([label, to]) => <NavLink key={to} to={to} end={to === "/"} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{label}</NavLink>)}
        <a className="nav-resume" href="/Ankush-Patil-Resume.pdf" download><Download size={14}/> Resume</a>
      </div>
    </nav>
  </header>;
}

export function Footer() {
  return <footer className="footer">
    <div className="container footer-inner">
      <div><div className="brand-mark">AP<span>.</span></div><p>Building a strong foundation in Linux, networking and IT infrastructure.</p></div>
      <div className="footer-social">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><Mail/></a>
      </div>
      <span className="copyright">© {new Date().getFullYear()} Ankush Patil. Built with care.</span>
    </div>
  </footer>;
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <AnimatePresence>{visible && <motion.button initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:12}} className="back-top icon-button" onClick={() => window.scrollTo({top:0,behavior:"smooth"})} aria-label="Back to top"><ArrowUp/></motion.button>}</AnimatePresence>;
}

export function PageShell({ children }) {
  const location = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [location.pathname]);
  return <><Navbar/><main>{children}</main><Footer/><ScrollToTop/></>;
}

export function PageHeading({ eyebrow, title, description }) {
  return <motion.div className="page-heading" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.55}}>
    <span className="eyebrow"><span className="status-dot"/> {eyebrow}</span>
    <h1>{title}</h1>
    {description && <p>{description}</p>}
  </motion.div>;
}

export function Reveal({ children, delay = 0, className = "" }) {
  return <motion.div className={className} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.12}} transition={{duration:.55, delay, ease:[.22,1,.36,1]}}>{children}</motion.div>;
}
