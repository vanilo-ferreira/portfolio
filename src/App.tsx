import "./index.css";

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
import { Projects } from "./components/Projects/Projects";
import { TypesServices } from "./components/TypesServices/TypesServices";

function App() {
  return (
    <>
      <Top />

      <main>
        <Profile />
        <AboutMe />
        <Projects />
        <TypesServices />


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