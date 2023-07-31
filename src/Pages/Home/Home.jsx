import NavLinks from "../../Nav/NavLinks";
import logo from "../../assets/Logo11.svg";
import codePc from "../../assets/abc1.png";
import "./Home.scss";

export default function Home() {
  return (
    <div className="container">
      <NavLinks />
      <div className="home">
        <p className="home3">Hi, I am - </p>
        <h1 style={{ fontWeight: "lighter" }} className="home1">
          {" "}
          Sankar Gopan.
        </h1>
        <h1 style={{ fontWeight: "lighter" }} className="home2">
          I Build Web Applications.
        </h1>
        <p className="home3">
          {"<p> "} Frontend Developer / Web Developer {" </p>"}
        </p>
        {/* <p className="home3">
          {"<p> "}I've been building websites since early 2020 and have proven
          expertise in frontend developement <br /> using React.js library, HTML5,
          CSS (and newly added to my tech-stack: SCSS) and JavaScript (ES6).{" </p>"}
        </p> */}
      </div>
      <p className="homeImg">
        {/* <img src={logo} alt="SG" className="logoImg" /> */}
      </p>

      <div className="circle-div">
        <hr className="circle" />
        <hr className="circle" />
        <hr className="circle" />
      </div>

      <div className="about-container">
        <div>
          <img className="aboutImg" src={codePc} alt="me" />
        </div>
        <div className="about-me">
          <h2 style={{ fontWeight: "lighter" }}>About Me</h2>
          <p>
            I'm your friendly Neighborhood developer specializing in front-end
            Developement (and I'm currently learning full-stack developement). I
            create websites and stories to share. Based in India, been building
            websites since early 2020 and have proven expertise in frontend
            developement using React.js library, HTML5, CSS (and newly added to
            my tech-stack: SCSS) and JavaScript (ES6) with various frontend
            based projects.
          </p>
          <p>
            As a front-end developer, I am passionate about building and
            delievering scalable and user-friendly web-applications. With an
            experience of almost an year and counting in building React.js
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}
