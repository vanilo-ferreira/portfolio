import "./styles.css";

import { useRef, useEffect } from 'react';

import ReactIcon from '../../assets/reactIcon.svg';
import ImagemProject from '../../assets/projects/gelateria.png';

import CloseIcon from '@mui/icons-material/Close';

interface IModal {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

export function Modal({ isOpen, setOpen }: IModal) {
    const modalRef = useRef<HTMLDivElement | null>(null);

    function closeModal() {
        setOpen(false);
    }

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (modalRef.current && e.target instanceof Node && !modalRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    if (isOpen) {
        return (
            <div className="background">
                <div className="containerModal" ref={modalRef}>
                    <div className="close">
                        <CloseIcon onClick={() => closeModal()} fontSize="medium"/>
                    </div>
                    <div className="projectImage">
                        <img src={ImagemProject} alt='Teste' />
                    </div>
                    <div className="projectInformation">
                        <h2 className="projectTitle">Lorem ipsum</h2>
                        <p className="projectSubtitle">Lorem ipsum dolor sit</p>
                        <p className="projectDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptas eius. Ea debitis natus exercitationem laboriosam porro possimus magnam reprehenderit aut, sapiente inventore distinctio, ratione fuga, autem accusamus? Molestiae, dolorum?</p>
                        <div className="containerButtons">
                            <button>Acessar projeto</button>
                            <button>Acessar repositório</button>
                        </div>
                        <div>
                            <p className="technologies">Tecnologias utilizadas:</p>
                            <div className="containerTechnologies">
                                <img src={ReactIcon} alt='React Logo' />
                                <img src={ReactIcon} alt='React Logo' />
                                <img src={ReactIcon} alt='React Logo' />
                                <img src={ReactIcon} alt='React Logo' />
                                <img src={ReactIcon} alt='React Logo' />
                                <img src={ReactIcon} alt='React Logo' />
                                <img src={ReactIcon} alt='React Logo' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}