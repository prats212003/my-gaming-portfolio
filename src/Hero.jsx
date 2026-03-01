import "./Hero.css";
// import profileImg from "../assets/Profile.png";

export default function Hero() {
  return (
    <section className="hero" id="Hero">
      <div className="hero-left">
        <img src={`${import.meta.env.BASE_URL}Profile.png`} alt="Profile" />
      </div>

      <div className="hero-right">
        <h1 className="Name">PRATHAMESH GHADI</h1>
        <h2 className="Design">FULL-STACK DEVELOPER</h2>
        <p className="c">
          Building pixel-perfect web experiences and crushing code challenges
          like boss battles.
        </p>
        <div className="buttons">
          <button className="primary"><i class="fa fa-rocket"></i>
            VIEW PROJECTS</button>
          <button className="secondary">
            <i class="fa fa-envelope"></i>
            HIRE ME</button>
        </div>
      </div>
    </section>
  );
}
