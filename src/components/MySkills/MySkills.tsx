import "./style.css";

import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import HTMLIcon from "../../assets/icons/htmlIcon.svg";
import CSSIcon from "../../assets/icons/cssIcon.svg";
import JSIcon from "../../assets/icons/jsIcon.svg";
import TailwindIcon from "../../assets/icons/tailwindIcon.svg";
import ReactIcon from "../../assets/icons/reactIcon.svg";
import NextIcon from "../../assets/icons/nextjsIcon.svg";
import TypeScriptIcon from "../../assets/icons/typescriptIcon.svg";
import AngularIcon from "../../assets/icons/angularJsIcon.svg";
import NodeJsIcon from "../../assets/icons/nodeJsIcon.svg";
import MaterialUiIcon from "../../assets/icons/materialUiIcon.svg";
import StyledComponentIcon from "../../assets/icons/styledComponentsIcon.svg";
import ViteIcon from "../../assets/icons/ViteIcon.svg";
import FigmaIcon from "../../assets/icons/figmaIcon.svg";
import GitIcon from "../../assets/icons/gitIcon.svg";
import PostgresSQLIcon from "../../assets/icons/postgresqlIcon.svg";

const skills = [
  { icon: AngularIcon, name: "Angular" },
  { icon: CSSIcon, name: "CSS" },
  { icon: JSIcon, name: "JavaSacript" },
  { icon: FigmaIcon, name: "Figma" },
  { icon: GitIcon, name: "Git" },
  { icon: HTMLIcon, name: "HTML" },
  { icon: MaterialUiIcon, name: "Material-UI" },
  { icon: NextIcon, name: "Next.js" },
  { icon: NodeJsIcon, name: "Node.js" },
  { icon: PostgresSQLIcon, name: "PostgresSQL" },
  { icon: ReactIcon, name: "React" },
  { icon: StyledComponentIcon, name: "styled-component" },
  { icon: TailwindIcon, name: "Tailwind" },
  { icon: TypeScriptIcon, name: "TypesScript" },
  { icon: ViteIcon, name: "Vite" },
];

export function MySkills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const visibleSlides = 6;
  const totalSlides = skills.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const getVisibleSlides = () => {
    return [...skills, ...skills].slice(
      currentIndex,
      currentIndex + visibleSlides
    );
  };

  return (
    <div id="mySkills">
      <h2 className="subtitles">Tecnologias</h2>

      <div className="containerSkills">
        <ArrowBackIcon
          className="arrows"
          onClick={prevSlide}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        />
        {getVisibleSlides().map((skill, index) => (
          <div
            key={index}
            className="skillCard"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img src={skill.icon} className="icons" alt={`${skill.name} Logo`} />
            <p>{skill.name}</p>
          </div>
        ))}
        <ArrowForwardIcon
          className="arrows"
          onClick={nextSlide}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        />
        ;
      </div>
    </div>
  );
}
