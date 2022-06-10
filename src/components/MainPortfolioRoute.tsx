import { useEffect, useState } from "react";
import ProjectInfo from "../models/ProjectInfo";
import { retrieveProjects } from "../services/ProjectInforService";
import Aos from "aos";
import "aos/dist/aos.css";
import "./MainPortfolioRoute.css";

const MainPortfolioRoute = () => {
  const [projects, setProjects] = useState<ProjectInfo[]>([]);

  useEffect(() => {
    retrieveProjects().then((response) => setProjects(response));
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="MainPortfolioRoute">
      {projects.map((project) => (
        <section>
          <h2 data-aos="fade-up">{project.title}</h2>
          {project.projectLink ? (
            <a
              data-aos="fade-up"
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          ) : (
            <h4>Work In Progress</h4>
          )}
          <img
            data-aos="fade-right"
            src={project.video}
            alt={`${project.title} video`}
          />
          <p data-aos="fade-left">{project.information}</p>
          <p data-aos="fade-right">
            <u>Tools Used:</u> {project.tools}
          </p>
          <p data-aos="fade-left">
            <u>Developers:</u> {project.developers}
          </p>
        </section>
      ))}
    </div>
  );
};

export default MainPortfolioRoute;
