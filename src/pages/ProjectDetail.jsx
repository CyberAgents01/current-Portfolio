import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Github } from "lucide-react";
import { projects } from "../data/profile";
import { PageHeading, Reveal } from "../components/Layout";

function Architecture({slug}) {
  const nodes = slug === "linux-server-hardening"
    ? [["CLIENTS","Client devices"],["LINUX SERVER","CentOS Stream 10"],["SERVICES","Kea · BIND · Apache · Samba"]]
    : slug === "ci-cd-automation"
    ? [["SOURCE","GitHub commit"],["AUTOMATION","Jenkins → Ansible"],["TARGET","Remote Apache server"]]
    : [["COMPUTER A","Python client"],["SOCKET LINK","Network communication"],["COMPUTER B","Python service"]];
  return <div className="architecture"><span className="mono-label">HIGH-LEVEL FLOW</span><div className="architecture-flow">{nodes.map((n,i)=><div className="architecture-node" key={n[0]}><small>{n[0]}</small><b>{n[1]}</b></div>)}</div><p>Conceptual overview based on the project description; not a packet-level or deployment diagram.</p></div>;
}

export default function ProjectDetail() {
  const {slug} = useParams();
  const project = projects.find(p=>p.slug===slug);
  if (!project) return <div className="page container"><PageHeading eyebrow="PROJECT NOT FOUND" title="This project isn't here."/><Link className="button button-primary" to="/projects">Back to projects</Link></div>;
  return <div className="page container"><Link to="/projects" className="back-link"><ArrowLeft size={16}/> All projects</Link><PageHeading eyebrow={`${project.number} / ${project.category}`} title={project.title} description={project.summary}/>
    <div className="detail-layout"><div><Reveal><h2 className="detail-title">Project overview</h2><p className="detail-copy">{project.summary}</p><h2 className="detail-title">What I worked on</h2><ul className="check-list">{project.highlights.map(x=><li key={x}><CheckCircle2 size={17}/>{x}</li>)}</ul><h2 className="detail-title">Outcome</h2><p className="detail-copy">{project.result}</p></Reveal></div><aside className="detail-aside"><Architecture slug={slug}/><span className="eyebrow">TECH STACK</span><div className="tag-list">{project.stack.map(x=><span className="tag" key={x}>{x}</span>)}</div>{project.github ? <a href={project.github} target="_blank" rel="noreferrer" className="button button-ghost full-button">View repository <Github size={16}/></a> : <p className="muted-note">Repository URL not supplied yet.</p>}</aside></div>
  </div>;
}
