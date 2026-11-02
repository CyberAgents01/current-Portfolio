import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "./Layout";

export default function ProjectCard({ project, index = 0 }) {
  return <Reveal delay={index * .08}>
    <article className="project-card">
      <div className="project-top"><span className="project-number">{project.number}</span><span className="project-category">{project.category}</span></div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tag-list">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div>
      <div className="project-actions">
        <Link to={`/projects/${project.slug}`} className="text-link">Explore project <ArrowUpRight size={16}/></Link>
        {project.github ? <a className="icon-link" href={project.github} target="_blank" rel="noreferrer" aria-label="Project GitHub"><Github size={17}/></a> : <span className="muted-note">Repository link pending</span>}
      </div>
    </article>
  </Reveal>;
}
