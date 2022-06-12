import axios from "axios";
import Email from "../models/Email";
import ProjectInfo from "../models/ProjectInfo";

const url: string = process.env.REACT_APP_API_URL || "";

export const retrieveProjects = async (): Promise<ProjectInfo[]> => {
  return (await axios.get(`${url}/get_projects/`)).data;
};

export const sendEmail = async (email: Email): Promise<boolean> => {
  return (await axios.post(`${url}/send-email`, email)).data;
};
