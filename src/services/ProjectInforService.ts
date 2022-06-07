import axios from "axios";
import ProjectInfo from "../models/ProjectInfo";

const url: string = process.env.REACT_APP_API_URL || "";

export const retrieveProjects = async (): Promise<ProjectInfo[]> => {
  return (await axios.get(`${url}/get_projects/`)).data;
};
