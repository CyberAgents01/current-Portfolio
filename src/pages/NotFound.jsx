import { Link } from "react-router-dom";
import { PageHeading } from "../components/Layout";
export default function NotFound(){return <div className="page container"><PageHeading eyebrow="404 — NOT FOUND" title={<>This route went<br/><span className="gradient-text">off the network.</span></>} description="The page you requested could not be found."/><Link className="button button-primary" to="/">Return home</Link></div>}
