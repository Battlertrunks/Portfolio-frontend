export default interface ProjectInfo {
  _id?: string;
  title: string;
  image: string;
  information: string;
  developers: string; // developers who contributed to project
  tools: string; // tools used on projects
  projectLink: string;
}
