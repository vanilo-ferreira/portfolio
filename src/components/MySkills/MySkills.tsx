import "./style.css";

import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { skills } from '../../data/skylls';

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
        {getVisibleSlides().map((skill) => (
          <div
            key={skill.id}
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
