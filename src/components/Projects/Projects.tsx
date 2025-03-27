import './style.css';

import { useState } from 'react';
import { Modal } from '../Modal/Modal';

import { projects } from '../../data/data';
import { IProjects } from '../../interfaces/IProjects';

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<IProjects | null>(null);

    return (
        <div id="projects">
            <h2 className="subtitles">Projetos</h2>

            <div className="projectCards">
                {projects.map((project) => (
                    <div key={project.id} className='card' onClick={() => setSelectedProject(project)}>
                        <div className='cardImage'>
                            <img src={project.projectImage} alt={project.title} />
                        </div>
                        <div className='cardDetails'>
                            <p className='cardTitle'>{project.title}</p>
                            <p className='stacks'>
                                Tecnologias: {project.technologies.map(tech => tech.technology).join(", ")}.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <Modal
                    isOpen={!!selectedProject}
                    setOpen={() => setSelectedProject(null)}
                    title={selectedProject.title}
                    subtitle={selectedProject.subtitle}
                    description={selectedProject.description}
                    deploy={selectedProject.deploy}
                    githubLink={selectedProject.githubLink}
                    projectImage={selectedProject.projectImage}
                    technologies={selectedProject.technologies}
                />
            )}

        </div>
    )
};