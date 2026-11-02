import { Terminal, Server, Network, Globe, Workflow, Code2, Cloud, ArrowUpRight } from "lucide-react";
import { skillGroups } from "../data/profile";
import { PageHeading, Reveal } from "../components/Layout";
const icons = {terminal:Terminal,server:Server,network:Network,globe:Globe,workflow:Workflow,code:Code2,cloud:Cloud};
export default function Skills() {
  return <div className="page container"><PageHeading eyebrow="TECHNICAL SKILLS" title={<>Tools, systems &amp;<br/><span className="gradient-text">technical foundations.</span></>} description="A categorized view of the technologies and practical areas I have studied and worked with."/>
    <div className="skills-grid">{skillGroups.map((group,i)=>{const Icon=icons[group.icon]||Terminal;return <Reveal key={group.title} delay={i*.05}><article className="skill-card"><div className="skill-card-head"><span className="skill-icon"><Icon/></span><span className="mono-label">0{i+1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item=><span key={item}>{item}</span>)}</div></article></Reveal>})}</div>
    <p className="note-line"><span className="status-dot"/> Skills represent learning and hands-on exposure; no proficiency percentages are claimed.</p>
  </div>;
}
