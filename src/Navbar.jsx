import "./Navbar.css";
import { projects } from "./projectsData.jsx";
 
export default function Navbar() {
  const totalCoins = projects.reduce((sum, project) => sum + project.xp, 0);
  return (
    <nav className="navbar">
      <div className="logo">{"<DEV />"}</div>
      <ul>
        <li className="list 1"><a className="nav-links 1" href="#Hero">ABOUT</a></li>
        <li className="list 3"><a className="nav-links 3" href="#Projects">PROJECTS</a></li>
        <li className="list 2"><a className="nav-links 2" href="#Skills">SKILLS</a></li>
        <li className="list 4"><a className="nav-links 4" href="#Contacts">CONTACTS</a></li>
      </ul>
      <div className="coins">{"\u{1FA99}"} {totalCoins}</div>
    </nav>
  );
}