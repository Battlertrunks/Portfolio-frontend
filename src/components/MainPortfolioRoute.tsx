import { useEffect, useState } from "react";
import ProjectInfo from "../models/ProjectInfo";
import { retrieveProjects } from "../services/ProjectInforService";
import "./MainPortfolioRoute.css";

const MainPortfolioRoute = () => {
  const [projects, setProjects] = useState<ProjectInfo[]>([]);

  useEffect(() => {
    retrieveProjects().then((response) => setProjects(response));
  }, []);

  return (
    <div className="MainPortfolioRoute">
      {projects.map((project) => (
        <section>
          <h2>{project.title}</h2>
          <img src={project.video} alt={`${project.title} video`} />
          <p>{project.information}</p>
          <p>Tools Used: {project.tools}</p>
          <p>Developers: {project.developers}</p>
        </section>
      ))}
    </div>
  );
};

export default MainPortfolioRoute;
