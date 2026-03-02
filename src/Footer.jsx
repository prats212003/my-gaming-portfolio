import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
        <div className="foot">
            <div className="foot-p1">
            <h3 className="p1-name">PRATHAMESH</h3>
            <p className="p1-desc">Full-stack developer crafting pixel-perfect experiences. Always ready for the next challenge.</p>
        </div>
        <div className="foot-p2">
            <h3 className="p2-title">CONNECT</h3>
            <div className="p2-buttons">
                <button className="github"><i class="fa fa-github" aria-hidden="true"></i></button>
                <button className="linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></button>
            </div>
           
        </div>
        </div>
        <hr />
      © 2026 Prathamesh Ghadi | Built with  React
    </footer>
  );
}
