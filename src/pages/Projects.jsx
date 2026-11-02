import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/profile";
import { PageHeading } from "../components/Layout";
export default function Projects() {
  return <div className="page container"><PageHeading eyebrow="PROJECTS" title={<>Practical work.<br/><span className="gradient-text">Real learning.</span></>} description="Selected projects demonstrating Linux services, network infrastructure, deployment automation and Python socket programming."/>
    <div className="project-grid project-grid-page">{projects.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div>
    <div className="notice-card"><strong>Project repositories</strong><p>Individual repository links have not yet been supplied. The project cards will show a repository link once the corresponding URL is added to <code>src/data/profile.js</code>.</p></div>
  </div>;
}
