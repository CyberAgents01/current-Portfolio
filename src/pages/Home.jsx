import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Terminal, Network, ShieldCheck, Server, Cloud, Code2 } from "lucide-react";
import { profile, projects, skillGroups } from "../data/profile";
import ProjectCard from "../components/ProjectCard";
import { Reveal } from "../components/Layout";

const focus = [
  [Terminal, "Linux Administration", "Linux systems, services, permissions and troubleshooting."],
  [Network, "Networking", "IP addressing, routing, switching and network services."],
  [Server, "Windows & Server Services", "Windows Server fundamentals, DNS, DHCP and file services."],
  [ShieldCheck, "Infrastructure Security", "Server hardening, access control and security fundamentals."],
  [Cloud, "Cloud & DevOps", "Automation, containers and cloud technology foundations."],
  [Code2, "Scripting", "Python, SQL and Bash for practical technical tasks."]
];

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-image" />
      <div className="hero-shade" />
      <div className="hero-grid container">
        <motion.div className="hero-copy" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
          <span className="eyebrow"><span className="status-dot"/> ASPIRING IT INFRASTRUCTURE ENGINEER</span>
          <h1>ANKUSH<br/><span>PATIL<span className="period">.</span></span></h1>
          <div className="hero-role">{profile.title}<span> / </span>IT Infrastructure &amp; Security</div>
          <p>{profile.tagline}</p>
          <div className="hero-actions">
            <Link to="/projects" className="button button-primary">Explore my work <ArrowUpRight size={17}/></Link>
            <Link to="/contact" className="button button-ghost">Contact me <ArrowRight size={16}/></Link>
          </div>
          <div className="hero-meta"><span><i/> Open to learning &amp; opportunities</span><span>{profile.location}</span></div>
        </motion.div>
        <motion.div className="hero-side-note" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{delay:.4,duration:.7}}>
          <span className="mono-label">FOCUS AREAS</span><b>LINUX</b><b>NETWORKING</b><b>INFRASTRUCTURE</b><b>SECURITY</b>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#intro"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      <div className="hero-index mono-label">01 / 07</div>
    </section>

    <section className="section container" id="intro">
      <div className="section-head"><div><span className="eyebrow">01 — INTRODUCTION</span><h2>Systems that work.<br/><span className="gradient-text">Infrastructure that lasts.</span></h2></div><Link to="/about" className="text-link">More about me <ArrowUpRight size={16}/></Link></div>
      <div className="intro-grid">
        <Reveal><p className="lead">{profile.summary}</p></Reveal>
        <Reveal delay={.1}><div className="terminal-card"><div className="terminal-bar"><span/><span/><span/><small>ankush@portfolio:~</small></div><div className="terminal-body"><p><i>$</i> whoami</p><strong>Linux &amp; Network Engineer</strong><p><i>$</i> focus --areas</p><strong>Linux · Networking · Security</strong><p><i>$</i> status</p><strong className="terminal-green">Learning. Building. Troubleshooting.</strong><span className="cursor-block">_</span></div></div></Reveal>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container"><div className="section-head"><div><span className="eyebrow">02 — TECHNICAL FOCUS</span><h2>Where I build <span className="gradient-text">capability.</span></h2></div><Link to="/skills" className="text-link">All skills <ArrowUpRight size={16}/></Link></div>
        <div className="focus-grid">{focus.map(([Icon,title,desc],i)=><Reveal key={title} delay={i*.05}><article className="focus-card"><Icon/><h3>{title}</h3><p>{desc}</p><span className="card-index">0{i+1}</span></article></Reveal>)}</div>
      </div>
    </section>

    <section className="section container"><div className="section-head"><div><span className="eyebrow">03 — SELECTED WORK</span><h2>Projects built <span className="gradient-text">hands-on.</span></h2></div><Link to="/projects" className="text-link">View all projects <ArrowUpRight size={16}/></Link></div><div className="project-grid">{projects.slice(0,2).map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div></section>

    <section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow">LET'S CONNECT</span><h2>Have an opportunity<br/>or a technical conversation?</h2></div><Link to="/contact" className="button button-primary">Get in touch <ArrowUpRight size={17}/></Link></div></section>
  </>;
}
