import { v4 as uuidv4 } from "uuid";

import NavLinks from "../../Nav/NavLinks";
import "./Projects.scss";
import cartProject from "../../assets/ProjectsPicks/Panda-Cart.png";
// import projec from "../../assets/ProjectsPicks/projec.png";
import socialMedia from "../../assets/ProjectsPicks/React-App.png";
import ProjCard from "./ProjectsCard/ProjectCard";
import MeetUp from "../../assets/ProjectsPicks/MiniProjec/MeetUp.png";
import Recipie from "../../assets/ProjectsPicks/MiniProjec/recipieBook.png";
import { Footer } from "../../Nav/Footer/Footer";

export default function Projects() {
  const projectsListing = [
    {
      _id: uuidv4(),
      title: "Lucky Panda",
      subtitle: "Social Media Web-app",
      desc: "Lucky Panda a social media web application to connect with users and share stories. The user interface is user-friendly to navigate.",
      website: "https://lucky-panda.vercel.app/signin",
      github: "https://github.com/Lumine8/lucky-panda",
      img: socialMedia,
    },
    {
      _id: uuidv4(),
      title: "Panda Cart",
      subtitle: "E-Commerce Web-App",
      desc: "This is an e-commerce web application to purchase food products. The app features a simple user interface and a diverse range of products.",
      website: "https://panda-cart.vercel.app/",
      github: "https://github.com/Lumine8/ecommerce-app",
      img: cartProject,
    },
    // {_id:uuidv4(),
    //   title: "",
    //   subtitle: "",
    //   desc: "",
    //   website: "",
    //   github: "",
    // },
  ];

  const miniProjectListing = [
    {
      _id: uuidv4(),
      title: "MeetUp",
      subtitle: "Event-management",
      desc: "MeetUp is an Event Management website, which allows its user to search for an event they want to be a part of and with details.",
      website: "https://tvtrmr-3000.csb.app/",
      github: "https://github.com/Lumine8/Meetup-EventManagement",
      img: MeetUp,
    },
    {
      _id: uuidv4(),
      title: "Recipie-Book",
      subtitle: "Recipie-Manager",
      desc: "Recipie-Book is a website that records and displays recipies. You can easily record recipies and view them at your convenience",
      website: "https://7vj43d-3000.csb.app/",
      github: "https://github.com/Lumine8/Recipie-Book",
      img: Recipie,
    },
  ];

  return (
    <div className="container">
      <NavLinks />
      <div>
        <h1 style={{ paddingTop: "1rem" }}>
          {" "}
          {/* <img src={projec} alt="projects" className="project-h1-img" /> */}
          Projects.
        </h1>
      </div>
      <div className="Projects-Container">
        <ul>
          {projectsListing.map((item) => {
            const { _id, title, subtitle, desc, website, github, img } = item;
            return (
              <li key={_id}>
                <ProjCard
                  props={{ title, subtitle, desc, website, github, img }}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <h2>Mini Projects</h2>
      <div className="Projects-Container">
        <ul>
          {miniProjectListing.map((item) => {
            const { _id, title, subtitle, desc, website, github, img } = item;
            return (
              <li key={_id}>
                <ProjCard
                  props={{ title, subtitle, desc, website, github, img }}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
