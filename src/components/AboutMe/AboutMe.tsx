import './style.css';

import ProfileIcon from "../../assets/profileIcon.svg";
import EmailIcon from "../../assets/emailIcon.svg";
import InstagramIcon from "../../assets/instagramIcon.svg";
import PhoneIcon from "../../assets/phoneIcon.svg";

export function AboutMe() {
  return (
    <div id="aboutMe">
      <div>
        <h2 className="subtitles">Sobre mim</h2>

        <p className="summary">
          Desenvolvedor full-stack com experiência em React, Node.js, Angular e
          TypeScript, além de conhecimentos em HTML, CSS, Python, Styled
          Components e Git. Atuação em projetos desafiadores, incluindo
          chatbots, e-commerce e aplicações web escaláveis, utilizando
          metodologias ágeis e boas práticas de desenvolvimento.
        </p>

        <p className="summary">
          Meu bom relacionamento interpessoal, comunicação e flexibilidade me
          levaram a participar do projeto voluntário SouJunior, onde contribuo
          para o desenvolvimento de projetos open source voltados à comunidade
          dev. Essa experiência fortalece minhas habilidades em trabalho em
          equipe, inovação e mentoria técnica.
        </p>
      </div>

      <div className="highlight">
        <div className="featuredCards">
          <div className="iconInHighlights">
            <img src={ProfileIcon} alt="Profile Icon" />
          </div>
          <div className="information">
            <h4>Meu Nome</h4>
            <p>Vanilo Ferreira</p>
          </div>
        </div>

        <div className="featuredCards">
          <div className="iconInHighlights">
            <img src={EmailIcon} alt="E-mail Icon" />
          </div>
          <div className="information">
            <h4>E-mail</h4>
            <p>vanilo.ferreira03@gmail.com</p>
          </div>
        </div>

        <div className="featuredCards">
          <div className="iconInHighlights">
            <img src={InstagramIcon} alt="Instagram Icon" />
          </div>
          <div className="information">
            <h4>Instagram</h4>
            <p>vsf_erreira</p>
          </div>
        </div>

        <div className="featuredCards">
          <div className="iconInHighlights">
            <img src={PhoneIcon} alt="Phone Icon" />
          </div>
          <div className="information">
            <h4>Telefone</h4>
            <p>(71) 9 9309-2086</p>
          </div>
        </div>
      </div>
    </div>
  );
};