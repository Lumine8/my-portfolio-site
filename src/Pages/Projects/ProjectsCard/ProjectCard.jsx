import "./ProjectCard.scss";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";

export default function ProjCard({ props }) {
  const { title, subtitle, desc, website, github, img } = props;

  return (
    <div className="Project-Card">
      <div>
        <img src={img} alt={title} />
      </div>
      <div className="project-desc">
        <p>
          <i>{subtitle}</i>
          <h2 style={{ fontWeight: "lighter" }}>{title}</h2>
        </p>
        <p>{desc}</p>
        <div className="card-links">
          <p>
            <a href={website} target="_blank">
              <BiLinkExternal />
            </a>
            <a href={github} target="_blank">
              <BiLogoGithub />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
