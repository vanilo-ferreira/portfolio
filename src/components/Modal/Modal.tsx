import './styles.css';

import { useRef, useEffect } from 'react';

import CloseIcon from '@mui/icons-material/Close';

import { IModal } from '../../interfaces/IProjects';

export function Modal({ isOpen, setOpen, title, subtitle, description, deploy, githubLink, projectImage, technologies }: IModal) {
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
            <div className='background'>
                <div className='containerModal' ref={modalRef}>
                    <div className='close'>
                        <CloseIcon onClick={() => closeModal()} fontSize='medium' />
                    </div>
                    <div className='projectImage'>
                        <img src={projectImage} alt={`Project image ${title}`} />
                    </div>
                    <div className='projectInformation'>
                        <h2 className='projectTitle'>{title}</h2>
                        <p className='projectSubtitle'>{subtitle}</p>
                        <p className='projectDescription'>{description}</p>
                        <div className='containerButtons'>
                            <a href={deploy} target='blank'>
                                <button>Acessar projeto</button>
                            </a>
                            <a href={githubLink} target='blank'>
                                <button>Acessar repositório</button>
                            </a>
                        </div>
                        <div>
                            <p className='technologies'>Tecnologias utilizadas:</p>
                            <div className='containerTechnologies'>
                                {technologies.map((technology) => (
                                    <img src={technology.image} alt={`Technology icon ${technology.technology}`}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}