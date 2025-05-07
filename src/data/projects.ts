import { IProjects } from "../interfaces/IProjects";

import Api from "../assets/projects/api.png";
import Gelateria from "../assets/projects/gelateria.png";
import Barbearia from "../assets/projects/barbearia.png";
import BuscadorCep from "../assets/projects/buscadorCep.png";
import JordanShoes from "../assets/projects/jordanShoes.png";
import Cardapio from "../assets/projects/cardapio.png";

import HTMLIcon from "../assets/icons/htmlIcon.svg";
import CSSIcon from "../assets/icons/cssIcon.svg";
import JavaScriptIcon from "../assets/icons/jsIcon.svg";
import TypeScriptIcon from "../assets/icons/typescriptIcon.svg";
import ReactIcon from "../assets/icons/react.svg";
import NextJsIcon from "../assets/icons/nextjsIcon.svg";
import NodeJsIcons from "../assets/icons/nodeJsIcon.svg";
import PostgresqlIcon from "../assets/icons/postgresqlIcon.svg";

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
  {
    id: 4,
    title: "JordanShoes",
    subtitle: "Loja de Sapatos Jordan",
    description:
      "Desenvolver um e-commerce virtual para a venda de sapatos da marca Jordan, JordanShoes, utilizando React e TypeScript, com Vite para garantir um ambiente de desenvolvimento mais rápido e otimizado. A aplicação terá uma interface moderna, responsiva e intuitiva, proporcionando uma ótima experiência de navegação.",
    deploy: "https://jordanshoes-lovat.vercel.app/",
    githubLink: "https://github.com/vanilo-ferreira/jordanshoes",
    projectImage: JordanShoes,
    technologies: [
      {
        technology: "TypeScript",
        image: TypeScriptIcon,
      },
      {
        technology: "React",
        image: ReactIcon,
      },
    ],
  },
  {
    id: 5,
    title: "Cardápio",
    subtitle: "Cardápio virtual para um restaurante",
    description:
      "Desenvolver uma aplicação de cardápio digital utilizando Next.js, proporcionando uma navegação fluida, rápida e otimizada. A aplicação permitirá que os usuários pesquisem pratos específicos por meio de uma barra de pesquisa e filtrem os itens por categoria (Entradas, Massas, Carnes, Bebidas, Saladas e Sobremesas), garantindo uma experiência intuitiva e eficiente.",
    deploy: "https://projeto-cardapio-iota.vercel.app/",
    githubLink: "https://github.com/vanilo-ferreira/projeto-cardapio",
    projectImage: Cardapio,
    technologies: [
      {
        technology: "Next.js",
        image: NextJsIcon,
      },
      {
        technology: "JavaScript",
        image: JavaScriptIcon,
      },
    ],
  },
  {
    id: 6,
    title: "Marketplace (API)",
    subtitle: "Loja virtual",
    description:
      "Este projeto tem como objetivo o desenvolvimento de uma API para um Marketplace moderno, utilizando Node.js como ambiente de execução e Express.js como framework principal para construção da aplicação backend. A aplicação permitirá o cadastro de usuários, autenticação segura, gerenciamento de produtos.",
    deploy: null,
    githubLink: "https://github.com/vanilo-ferreira/api-marketplace",
    projectImage: Api,
    technologies: [
      {
        technology: "Node.js",
        image: NodeJsIcons,
      },
      {
        technology: "PostgresSQL",
        image: PostgresqlIcon,
      },
    ],
  },
];
