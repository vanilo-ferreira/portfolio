import { ISkylls } from "./../interfaces/ISkylls";

import HTMLIcon from "../assets/icons/htmlIcon.svg";
import CSSIcon from "../assets/icons/cssIcon.svg";
import JSIcon from "../assets/icons/jsIcon.svg";
import TailwindIcon from "../assets/icons/tailwindIcon.svg";
import ReactIcon from "../assets/icons/reactIcon.svg";
import NextIcon from "../assets/icons/nextjsIcon.svg";
import TypeScriptIcon from "../assets/icons/typescriptIcon.svg";
import AngularIcon from "../assets/icons/angularJsIcon.svg";
import NodeJsIcon from "../assets/icons/nodeJsIcon.svg";
import MaterialUiIcon from "../assets/icons/materialUiIcon.svg";
import StyledComponentIcon from "../assets/icons/styledComponentsIcon.svg";
import ViteIcon from "../assets/icons/viteIcon.svg";
import FigmaIcon from "../assets/icons/figmaIcon.svg";
import GitIcon from "../assets/icons/gitIcon.svg";
import PostgresSQLIcon from "../assets/icons/postgresqlIcon.svg";
import PythonIcon from "../assets/icons/pythonIcon.svg";

export const skills: Array<ISkylls> = [
  { id: 1, icon: AngularIcon, name: "Angular" },
  { id: 2, icon: CSSIcon, name: "CSS" },
  { id: 3, icon: JSIcon, name: "JavaSacript" },
  { id: 4, icon: FigmaIcon, name: "Figma" },
  { id: 5, icon: GitIcon, name: "Git" },
  { id: 6, icon: HTMLIcon, name: "HTML" },
  { id: 7, icon: MaterialUiIcon, name: "Material-UI" },
  { id: 8, icon: NextIcon, name: "Next.js" },
  { id: 9, icon: NodeJsIcon, name: "Node.js" },
  { id: 10, icon: PostgresSQLIcon, name: "PostgresSQL" },
  { id: 11, icon: PythonIcon, name: "Python" },
  { id: 12, icon: ReactIcon, name: "React" },
  { id: 13, icon: StyledComponentIcon, name: "styled-component" },
  { id: 14, icon: TailwindIcon, name: "Tailwind" },
  { id: 15, icon: TypeScriptIcon, name: "TypesScript" },
  { id: 16, icon: ViteIcon, name: "Vite" },
];
