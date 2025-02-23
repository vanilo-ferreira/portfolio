import './style.css';

import { useState } from 'react';
import { Modal } from '../Modal/Modal'

export function Projects() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div id="projects">
            <h2 className="subtitles">Projetos</h2>

            <Modal
                isOpen={open}
                setOpen={setOpen}
            />

            <div className="projectCards">
                <div className="card" onClick={() => setOpen(!open)}>
                    <div className="cardImage"></div>
                    <div className="cardDetails">
                        <p className="cardTitle">Título do Projeto</p>
                        <p className="stacks">Tecnologias: HTML, CSS e JS.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="cardImage"></div>
                    <div className="cardDetails">
                        <p className="cardTitle">Título do Projeto</p>
                        <p className="stacks">Tecnologias: HTML, CSS e JS.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="cardImage"></div>
                    <div className="cardDetails">
                        <p className="cardTitle">Título do Projeto</p>
                        <p className="stacks">Tecnologias: HTML, CSS e JS.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="cardImage"></div>
                    <div className="cardDetails">
                        <p className="cardTitle">Título do Projeto</p>
                        <p className="stacks">Tecnologias: HTML, CSS e JS.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="cardImage"></div>
                    <div className="cardDetails">
                        <p className="cardTitle">Título do Projeto</p>
                        <p className="stacks">Tecnologias: HTML, CSS e JS.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="cardImage"></div>
                    <div className="cardDetails">
                        <p className="cardTitle">Título do Projeto</p>
                        <p className="stacks">Tecnologias: HTML, CSS e JS.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};