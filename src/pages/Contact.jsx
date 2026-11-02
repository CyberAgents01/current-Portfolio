import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { profile } from "../data/profile";
import { PageHeading } from "../components/Layout";

export default function Contact() {
  const [form,setForm] = useState({name:"",email:"",subject:"",message:""});
  const [status,setStatus] = useState({type:"",message:""});
  const [busy,setBusy] = useState(false);
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const update = e => setForm({...form,[e.target.name]:e.target.value});
  async function submit(e) {
    e.preventDefault();
    setStatus({type:"",message:""});
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus({type:"error",message:"Please complete all fields."}); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({type:"error",message:"Please enter a valid email address."}); return;
    }
    if (!endpoint) {
      const subject = encodeURIComponent(form.subject);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus({type:"info",message:"Your email app should open with the message prepared. Delivery happens only after you send it."});
      return;
    }
    setBusy(true);
    try {
      const response = await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify(form)});
      if (!response.ok) throw new Error("The form service returned an error.");
      setStatus({type:"success",message:"Thanks! Your message was submitted successfully."});
      setForm({name:"",email:"",subject:"",message:""});
    } catch {
      setStatus({type:"error",message:"Message could not be submitted. Please email me directly instead."});
    } finally { setBusy(false); }
  }
  return <div className="page container"><PageHeading eyebrow="CONTACT" title={<>Let's start a<br/><span className="gradient-text">conversation.</span></>} description="Have an opportunity, a question or an infrastructure topic to discuss? Feel free to reach out."/>
    <div className="contact-layout"><div className="contact-details">
      <a href={`mailto:${profile.email}`} className="contact-item"><span><Mail/></span><div><small>EMAIL</small><b>{profile.email}</b></div></a>
      <a href={`tel:${profile.phone.replaceAll(" ","")}`} className="contact-item"><span><Phone/></span><div><small>PHONE</small><b>{profile.phone}</b></div></a>
      <div className="contact-item"><span><MapPin/></span><div><small>LOCATION</small><b>{profile.location}</b></div></div>
      <a href={profile.github} target="_blank" rel="noreferrer" className="contact-item"><span><Github/></span><div><small>GITHUB</small><b>CyberAgents01</b></div></a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-item"><span><Linkedin/></span><div><small>LINKEDIN</small><b>Ankush Patil</b></div></a>
    </div>
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row"><label>Full name<input name="name" value={form.name} onChange={update} placeholder="Your name" autoComplete="name" required/></label><label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" autoComplete="email" required/></label></div>
      <label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="What would you like to discuss?" required/></label>
      <label>Message<textarea name="message" rows="6" value={form.message} onChange={update} placeholder="Write your message..." required/></label>
      {status.message && <div className={`form-status ${status.type}`}>{status.type==="success" ? <CheckCircle2/> : <AlertCircle/>}{status.message}</div>}
      <button className="button button-primary" type="submit" disabled={busy}>{busy ? "Sending..." : "Send message"} <Send size={16}/></button>
      {!endpoint && <p className="form-hint">The form currently uses your email application as a fallback. To enable direct online submissions, configure a Formspree endpoint in <code>.env</code>.</p>}
    </form></div>
  </div>;
}
