import './style.css'; 

import HTMLIcon from '../../assets/icons/htmlIcon.svg';
import CSSIcon from '../../assets/icons/cssIcon.svg';
import JSIcon from '../../assets/icons/jsIcon.svg';
import TailwindIcon from '../../assets/icons/tailwindIcon.svg';
import ReactIcon from '../../assets/icons/reactIcon.svg';
import NextIcon from '../../assets/icons/nextjsIcon.svg';

export function MySkills() {
    return (
        <div id='mySkills'>
            <h2 className='subtitles'>Minhas skills</h2>

            <div className='containerSkills'>
                <div className='skillCard'>
                    <img src={HTMLIcon} alt='HTML Logo' />
                    <p>HTML</p>
                </div>

                <div className='skillCard'>
                    <img src={CSSIcon} alt='CSS Logo' />
                    <p>CSS</p>
                </div>

                <div className='skillCard'>
                    <img src={JSIcon} alt='Javascript Logo' />
                    <p>JAVASCRIPT</p>
                </div>

                <div className='skillCard'>
                    <img src={TailwindIcon} alt='Tailwind Logo' />
                    <p>TAILWIND</p>
                </div>

                <div className='skillCard'>
                    <img src={ReactIcon} alt='React Logo' />
                    <p>REACT</p>
                </div>

                <div className='skillCard'>
                    <img src={NextIcon} alt='Next.js Logo' />
                    <p>NEXT.js</p>
                </div>
            </div>
        </div>
    )
};