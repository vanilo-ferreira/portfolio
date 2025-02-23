import { ITechnologies } from './ITechnologies';

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
};