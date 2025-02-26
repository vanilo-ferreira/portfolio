import { IProjects } from "../interfaces/IProjects";

import Gelateria from "../assets/projects/gelateria.png";
import Barbearia from "../assets/projects/barbearia.png";

import HTMLIcon from "../assets/htmlIcon.svg";
import CSSIcon from "../assets/cssIcon.svg";
import ReactIcon from "../assets/reactIcon.svg";

export const projects: Array<IProjects> = [
  {
    id: 1,
    title: "Gelateria",
    subtitle: "Venda de sorvetes",
    description:
      "O site possui uma interface moderna e responsiva, destacando os produtos e a identidade da Gelateria.",
    deploy: "https://gelateria-rho.vercel.app/",
    githubLink: "https://github.com/vanilo-ferreira/gelateria",
    projectImage: Gelateria,
    technologies: [
      {
        technology: "React",
        image: ReactIcon,
      },
      {
        technology: "HTML",
        image: HTMLIcon,
      },
      {
        technology: "CSS",
        image: CSSIcon,
      },
    ],
  },
  {
    id: 2,
    title: "Barber Shop",
    subtitle: "Barbearia",
    description:
      "A proposta desse projeto foi criar uma Landing Page de uma barbearia em React JS que possui a capacidade de alterar a cor do tema, ou seja, que possua um botão para alterar o tema de claro para escuro.",
    deploy: "https://barbearia-sage-nu.vercel.app/",
    githubLink: "https://github.com/vanilo-ferreira/barbearia",
    projectImage: Barbearia,
    technologies: [
      {
        technology: "React",
        image: ReactIcon,
      },
      {
        technology: "HTML",
        image: HTMLIcon,
      },
      {
        technology: "CSS",
        image: CSSIcon,
      },
    ],
  },
];
