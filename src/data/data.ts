import { Projects } from "../interfaces/IProjects";

import Gelateria from "../assets/projects/gelateria.png";

export const projects: Array<Projects> = [
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
                image: ""
            }
        ],
    }
];