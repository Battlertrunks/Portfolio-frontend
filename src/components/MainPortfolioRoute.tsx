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
          <div className="content-container">
            <div className="title-img">
              <img
                data-aos="fade-right"
                src={project.video}
                alt={`${project.title} video`}
              />
            </div>
            <div className="information-container">
              <p data-aos="fade-left">{project.information}</p>
              <p data-aos="fade-right">
                <u>Tools Used:</u> {project.tools}
              </p>
              <p data-aos="fade-left">
                <u>Developers:</u> {project.developers}
              </p>
              {project.projectLink ? (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              ) : (
                <h4 className="in-progress-text">Work In Progress</h4>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MainPortfolioRoute;
