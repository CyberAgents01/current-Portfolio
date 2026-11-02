import { Award, GraduationCap } from "lucide-react";
import { certifications, profile } from "../data/profile";
import { PageHeading, Reveal } from "../components/Layout";
export default function Education() {
  return <div className="page container"><PageHeading eyebrow="EDUCATION & CERTIFICATIONS" title={<>Strong foundations.<br/><span className="gradient-text">Continuous learning.</span></>} description="Academic background and training credentials."/>
    <div className="education-grid">{profile.education.map((e,i)=><Reveal key={e.title} delay={i*.08}><article className="education-card"><div className="education-icon"><GraduationCap/></div><span className="eyebrow">{e.period}</span><h2>{e.title}</h2><h3>{e.place}</h3><p>{e.detail}</p></article></Reveal>)}</div>
    <section className="subsection"><span className="eyebrow">CERTIFICATIONS & TRAINING</span><h2>Learning beyond <span className="gradient-text">the classroom.</span></h2><div className="cert-grid">{certifications.map((c,i)=><Reveal key={c} delay={i*.06}><div className="cert-card"><Award/><span className="mono-label">0{i+1}</span><h3>{c}</h3></div></Reveal>)}</div></section>
    <div className="notice-card"><strong>Additional details</strong><p>Certificate issue dates, certificate IDs and verification links were not included in the supplied resume, so they have intentionally not been invented.</p></div>
  </div>;
}
