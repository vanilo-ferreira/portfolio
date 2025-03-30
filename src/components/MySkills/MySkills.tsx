import './style.css';

import { useState, useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import HTMLIcon from '../../assets/icons/htmlIcon.svg';
import CSSIcon from '../../assets/icons/cssIcon.svg';
import JSIcon from '../../assets/icons/jsIcon.svg';
import TailwindIcon from '../../assets/icons/tailwindIcon.svg';
import ReactIcon from '../../assets/icons/reactIcon.svg';
import NextIcon from '../../assets/icons/nextjsIcon.svg';


const skills = [
    { icon: HTMLIcon, name: "HTML" },
    { icon: CSSIcon, name: "CSS" },
    { icon: JSIcon, name: "JAVASCRIPT" },
    { icon: TailwindIcon, name: "TAILWIND" },
    { icon: ReactIcon, name: "REACT" },
    { icon: NextIcon, name: "NEXT.js" },
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
        return [...skills, ...skills].slice(currentIndex, currentIndex + visibleSlides);
    };

    return (
        <div id='mySkills'>
            <h2 className='subtitles'>Tecnologias</h2>

            <div className='containerSkills'>
                <ArrowBackIcon
                    className='arrows'
                    onClick={prevSlide}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                />

                {getVisibleSlides().map((skill, index) => (
                    <div key={index} className="skillCard"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <img src={skill.icon} alt={`${skill.name} Logo`} />
                        <p>{skill.name}</p>
                    </div>
                ))}

                <ArrowForwardIcon
                    className='arrows'
                    onClick={nextSlide}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                />;
            </div>
        </div>
    )
};