export interface ITechnologies {
    technology: string,
    image: string
}
export interface IProjects {
    title: string,
    subtitle: string,
    description: string,
    deploy: string,
    githubLink: string,
    projectImage: string,
    technologies: Array<ITechnologies>
}

export interface IModal {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    title: string;
    subtitle: string;
    description: string;
    deploy: string;
    githubLink: string;
    projectImage: string;
    technologies: Array<ITechnologies>;
}