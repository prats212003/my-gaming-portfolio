import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">{"<DEV />"}</div>
      <ul>
        <li class="list 1"><a className="nav-links 1" href="#Hero">ABOUT</a></li>
        <li class="list 2"><a className="nav-links 2" href="#Skills">SKILLS</a></li>
        <li class="list 3"><a className="nav-links 3" href="#Projects">PROJECTS</a></li>
        <li class="list 4"><a className="nav-links 4" href="#Contacts">CONTACTS</a></li>
      </ul>
      <div className="coins">🪙 42</div>
    </nav>
  );
}