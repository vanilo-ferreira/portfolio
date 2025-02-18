import "./index.css";

import CodeIcon from "./assets/codeIcon.svg";
import FigmaIcon from "./assets/figmaIcon.svg";
import TabletIcon from "./assets/tabletIcon.svg";

import HTMLIcon from "./assets/htmlIcon.svg";
import CSSIcon from "./assets/cssIcon.svg";
import JSIcon from "./assets/jsIcon.svg";
import TailwindIcon from "./assets/tailwindIcon.svg";
import ReactIcon from "./assets/reactIcon.svg";
import NextIcon from "./assets/nextjsIcon.svg";

import EmailIcon2 from "./assets/emailIcon2.svg";
import PhoneIcon2 from "./assets/phoneIcon2.svg";

import { Top } from "./components/Top/Top";
import { Profile } from "./components/Profile/Profile";
import { AboutMe } from "./components/AboutMe/AboutMe";

function App() {
  return (
    <>
      <Top />

      <main>
        <Profile />
        <AboutMe />

        <section id="projects">
          <h2 className="subtitles">Projetos</h2>

          <div className="projectCards">
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

            <div className="card">
              <div className="cardImage"></div>
              <div className="cardDetails">
                <p className="cardTitle">Título do Projeto</p>
                <p className="stacks">Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <h2 className="subtitles">Serviços</h2>

          <div className="containerServices">
            <div className="serviceCard">
              <img src={FigmaIcon} alt="FigmaIcon" />
              <p>
                Criação <br />
                de sites
              </p>
            </div>

            <div className="serviceCard">
              <img src={CodeIcon} alt="Code Icon" />
              <p>
                Criação <br />
                de API
              </p>
            </div>

            <div className="serviceCard">
              <img src={TabletIcon} alt="Tablet Icon" />
              <p>
                Sites <br />
                responsivos
              </p>
            </div>
          </div>
        </section>

        <section id="mySkills">
          <h2 className="subtitles">Minhas skills</h2>

          <div className="containerSkills">
            <div className="skillCard">
              <img src={HTMLIcon} alt="HTML Logo" />
              <p>HTML</p>
            </div>

            <div className="skillCard">
              <img src={CSSIcon} alt="CSS Logo" />
              <p>CSS</p>
            </div>

            <div className="skillCard">
              <img src={JSIcon} alt="Javascript Logo" />
              <p>JAVASCRIPT</p>
            </div>

            <div className="skillCard">
              <img src={TailwindIcon} alt="Tailwind Logo" />
              <p>TAILWIND</p>
            </div>

            <div className="skillCard">
              <img src={ReactIcon} alt="React Logo" />
              <p>REACT</p>
            </div>

            <div className="skillCard">
              <img src={NextIcon} alt="Next.js Logo" />
              <p>NEXT.js</p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="containerContact">
            <div className="containerInformation">
              <p className="subtitleContact">Entrar em contato</p>
              <p className="contactParagraph">
                Sou muito acessível e adoraria falar com você. Fique à vontade
                para ligar, me envie um e-mail. Siga-me nas redes sociais ou
                simplesmente preencha o formulário de consulta.
              </p>

              <div className="contactDetails">
                <figure>
                  <img src={PhoneIcon2} alt="Phone Icon" />
                </figure>
                <p>(71) 9 9309-2086</p>
              </div>

              <div className="contactDetails">
                <figure>
                  <img src={EmailIcon2} alt="E-mail Icon" />
                </figure>
                <p>vanilo.ferreira03@gmail.com</p>
              </div>
            </div>
            <div className="containerForm">
              <p className="subtitleContact">Me mande uma mensagem</p>
              <form className="form">
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Assunto" />
                <input
                  type="text"
                  placeholder="Sua mensagem"
                  id="yourMessage"
                />
                <button className="contactButton">Enviar mensagem</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;