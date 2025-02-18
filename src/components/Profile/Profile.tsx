import TypeIt from 'typeit-react';
import Image1 from '../../assets/image1.png';

import './style.css'

export function Profile() {
  return (
    <div className="profile">
      <div>
        <h1>
          Olá, eu sou o <br />
          <span className="name">Vanilo Ferreira</span> :)
        </h1>
        <p>
          Desenvolvedor{" "}
          <span>
            <TypeIt
              options={{
                loop: true,
                waitUntilVisible: true,
              }}
              getBeforeInit={(instance) => {
                instance
                  .type("Front-End")
                  .pause(750)
                  .delete(9)
                  .pause(500)
                  .type("Back-End")
                  .pause(750)
                  .delete(8)
                  .pause(500)
                  .type("Full-Stack");
                return instance;
              }}
            />
          </span>
        </p>

        <div>
          <button className="CVButton">Download CV</button>
          <a href="#contact">
            <button className="ContactButton">Entrar em contato</button>
          </a>
        </div>
      </div>

      <div>
        <img className="imageProfile" src={Image1} alt="Waving cartoon" />
      </div>
    </div>
  );
}
