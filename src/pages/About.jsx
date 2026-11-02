import { BookOpen, BriefcaseBusiness, GraduationCap, Wrench } from "lucide-react";
import { profile } from "../data/profile";
import { PageHeading, Reveal } from "../components/Layout";

const timeline = [
  {icon:GraduationCap, title:"B.Tech — Computer Science & Engineering", meta:"Sandip University, Nashik · 2026", desc:"Specialization in Cyber Security & Forensics. Graduated with CGPA 8.85 / 10."},
  {icon:BriefcaseBusiness, title:"VAPT Trainee", meta:"EyeQDot.net, Mangalore · 6 months", desc:"Remote, task-based internship involving vulnerability assessment and penetration testing fundamentals."},
  {icon:BookOpen, title:"CDAC PGCP-ITISS", meta:"C-DAC, Bengaluru · Pursuing", desc:"Post Graduate Certificate Programme in IT Infrastructure, Systems and Security."},
  {icon:Wrench, title:"Hands-on infrastructure projects", meta:"Practical learning", desc:"Built Linux server services, hardened a CentOS server and automated Apache website deployment using Jenkins and Ansible."}
];

export default function About() {
  return <div className="page container"><PageHeading eyebrow="ABOUT ME" title={<>Curious about systems.<br/><span className="gradient-text">Focused on infrastructure.</span></>} description="My background, learning journey and the technical areas I am working toward."/>
    <div className="about-layout"><Reveal><div className="about-copy"><span className="eyebrow">A LITTLE ABOUT ME</span><p className="lead">{profile.about}</p><p>{profile.summary}</p><p>I value methodical troubleshooting: understand the symptoms, inspect the system, identify the root cause, apply a controlled fix and document what changed.</p><div className="tag-list">{profile.strengths.map(x=><span className="tag" key={x}>{x}</span>)}</div></div></Reveal>
    <Reveal delay={.12}><aside className="about-panel"><span className="mono-label">CURRENT DIRECTION</span><h3>Linux &amp; Network Engineering</h3><p>Building practical foundations in operating systems, networking, server services and infrastructure security.</p><div className="panel-line"><span>LOCATION</span><b>{profile.location}</b></div><div className="panel-line"><span>PROGRAMME</span><b>CDAC PGCP-ITISS</b></div><div className="panel-line"><span>DEGREE</span><b>B.Tech CSE</b></div></aside></Reveal></div>
    <section className="subsection"><span className="eyebrow">MY JOURNEY</span><h2>Learning through <span className="gradient-text">doing.</span></h2><div className="timeline">{timeline.map((item,i)=><Reveal key={item.title} delay={i*.06}><article className="timeline-item"><div className="timeline-icon"><item.icon size={19}/></div><div><span className="timeline-meta">{item.meta}</span><h3>{item.title}</h3><p>{item.desc}</p></div></article></Reveal>)}</div></section>
  </div>;
}
