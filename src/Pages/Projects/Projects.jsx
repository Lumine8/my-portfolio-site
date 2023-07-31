import { v4 as uuidv4 } from "uuid";

import NavLinks from "../../Nav/NavLinks";
import "./Projects.scss";
import cartProject from "../../assets/ProjectsPicks/Panda-Cart.png";
import projec from "../../assets/ProjectsPicks/projec.png";
import socialMedia from "../../assets/ProjectsPicks/React-App.png";
import ProjCard from "./ProjectsCard/ProjectCard";

export default function Projects() {
  const projectsListing = [
    {
      _id: uuidv4(),
      title: "Lucky Panda",
      subtitle: "Social Media Web-app",
      desc: "This is a social media web application to connect with users and share stories. The user interface is user-friendly to navigate.",
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
  return (
    <div className="container">
      <NavLinks />
      <div>
        <h1>
          {" "}
          <img src={projec} alt="projects" className="project-h1-img" />
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
    </div>
  );
}
