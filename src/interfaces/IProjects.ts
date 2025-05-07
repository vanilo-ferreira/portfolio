import { ITechnologies } from "./ITechnologies";
export interface IProjects {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  deploy: string | null;
  githubLink: string;
  projectImage: string;
  technologies: Array<ITechnologies>;
}
