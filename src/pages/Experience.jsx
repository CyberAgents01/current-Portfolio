import { ShieldCheck, ServerCog } from "lucide-react";
import { PageHeading, Reveal } from "../components/Layout";
export default function Experience() {
  return <div className="page container"><PageHeading eyebrow="EXPERIENCE" title={<>Learning through<br/><span className="gradient-text">hands-on tasks.</span></>} description="Internship exposure and practical infrastructure work, presented accurately without overstating responsibilities."/>
    <div className="experience-stack">
      <Reveal><article className="experience-card"><div className="experience-icon"><ShieldCheck/></div><div className="experience-content"><span className="eyebrow">6 MONTHS · REMOTE · TASK-BASED</span><h2>VAPT Trainee</h2><h3>EyeQDot.net · Mangalore</h3><p>Worked on vulnerability assessment and penetration testing fundamentals through assigned security testing tasks.</p><ul className="check-list"><li><ShieldCheck size={16}/>Performed assigned security testing tasks.</li><li><ShieldCheck size={16}/>Worked with vulnerability assessment and penetration testing basics.</li><li><ShieldCheck size={16}/>Documented findings and prepared task reports.</li></ul></div></article></Reveal>
      <Reveal delay={.1}><article className="experience-card"><div className="experience-icon"><ServerCog/></div><div className="experience-content"><span className="eyebrow">CDAC PGCP-ITISS · PRACTICAL LEARNING</span><h2>IT Infrastructure Labs &amp; Projects</h2><h3>C-DAC · Bengaluru</h3><p>Practical learning in Linux administration, network services, server configuration and automation.</p><ul className="check-list"><li><ShieldCheck size={16}/>Linux server setup and service troubleshooting.</li><li><ShieldCheck size={16}/>DHCP, DNS, Apache and Samba configuration.</li><li><ShieldCheck size={16}/>Server hardening and firewall configuration.</li><li><ShieldCheck size={16}/>Jenkins and Ansible deployment automation.</li></ul></div></article></Reveal>
    </div>
  </div>;
}
