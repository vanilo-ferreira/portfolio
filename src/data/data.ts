import { IProjects } from "../interfaces/IProjects";

import Gelateria from "../assets/projects/gelateria.png";

import HTMLIcon from '../assets/htmlIcon.svg';
import CSSIcon from '../assets/cssIcon.svg';
import ReactIcon from '../assets/reactIcon.svg';

export const projects: Array<IProjects> = [
    {
        title: 'Gelateria',
        subtitle: "Venda de sorvetes",
        description: "O site possui uma interface moderna e responsiva, destacando os produtos e a identidade da Gelateria.",
        deploy: "https://gelateria-rho.vercel.app/",
        githubLink: "https://github.com/vanilo-ferreira/gelateria",
        projectImage: Gelateria,
        technologies: [
            {
                technology: "React",
                image: ReactIcon
            },
            {
                technology: "HTML",
                image: HTMLIcon
            },
            {
                technology: "CSS",
                image: CSSIcon
            }
        ],
    }
];