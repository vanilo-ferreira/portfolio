import './style.css';

import { useState } from 'react';
import { Modal } from '../Modal/Modal';

import { projects } from '../../data/data';

export function Projects() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div id="projects">
            <h2 className="subtitles">Projetos</h2>

            <div className="projectCards">
                {projects.map((project) => (
                    <>
                        <Modal
                            isOpen={open}
                            setOpen={setOpen}
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.description}
                            deploy={project.deploy}
                            githubLink={project.githubLink}
                            projectImage={project.projectImage}
                            technologies={project.technologies}
                        />

                        <div className='card' onClick={() => setOpen(!open)}>
                            <div className='cardImage'>
                                <img src={project.projectImage} />
                            </div>
                            <div className='cardDetails'>
                                <p className='cardTitle'>{project.title}</p>
                                <p className='stacks'>Tecnologias: {project.technologies.map(technology => technology.technology).join(", ")}.</p>
                            </div>
                        </div>
                    </>
                ))};
            </div>
        </div>
    )
};