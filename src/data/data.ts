import { IProjects } from "../interfaces/IProjects";

import Gelateria from "../assets/projects/gelateria.png";
import Barbearia from "../assets/projects/barbearia.png";
import BuscadorCep from "../assets/projects/buscadorCep.png";

import HTMLIcon from "../assets/htmlIcon.svg";
import CSSIcon from "../assets/cssIcon.svg";
import ReactIcon from "../assets/reactIcon.svg";
import JavaScriptIcon from "../assets/jsIcon.svg";

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
  {
    id: 3,
    title: "Buscador de CEP",
    subtitle: "Buscador de CEP utilizando a API ViaCEP",
    description:
      "Desenvolver uma aplicação web utilizando HTML, CSS e JavaScript que permita ao usuário consultar informações de um CEP informado. A aplicação será integrada a uma API externa, ViaCEP, para buscar dados como logradouro, bairro, cidade e estado, exibindo-os de forma dinâmica na interface.",
    deploy: "https://buscador-cep-rho-nine.vercel.app/",
    githubLink: "https://github.com/vanilo-ferreira/buscador-cep",
    projectImage: BuscadorCep,
    technologies: [
      {
        technology: "JavaScript",
        image: JavaScriptIcon,
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
