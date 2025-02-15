import './index.css';
import TypeIt from "typeit-react";
import Image1 from './assets/image1.png';
import ProfileIcon from './assets/profileIcon.svg';
import EmailIcon from './assets/emailIcon.svg';
import InstagramIcon from './assets/instagramIcon.svg';
import PhoneIcon from './assets/phoneIcon.svg';

import CodeIcon from './assets/codeIcon.svg';
import FigmaIcon from './assets/figmaIcon.svg';
import TabletIcon from './assets/tabletIcon.svg';

import HTMLIcon from './assets/htmlIcon.svg';
import CSSIcon from './assets/cssIcon.svg';
import JSIcon from './assets/jsIcon.svg';
import TailwindIcon from './assets/tailwindIcon.svg';
import ReactIcon from './assets/reactIcon.svg';
import NextIcon from './assets/nextjsIcon.svg';

import EmailIcon2 from './assets/emailIcon2.svg';
import PhoneIcon2 from './assets/phoneIcon2.svg';



function App() {

  return (
    <>
      <header>
        <div>
          <h1 className='logo'>Portfólio</h1>
        </div>

        <nav>
          <a href='#aboutMe'>Sobre mim</a>
          <a href='#projects'>Projetos</a>
          <a href='#services'>Serviços</a>
          <a href='#mySkills'>Minhas skills</a>
        </nav>
      </header>
      <main>
        <section className='profile'>
          <div>
            <h1>Olá, eu sou o <br />
              <span className='name'>Vanilo Ferreira</span>
              :)</h1>
            <p>Desenvolvedor <span>
                <TypeIt
                  options={{
                    loop: true,
                    waitUntilVisible: true,
                  }}
                  getBeforeInit={(instance) => {
                    instance.type("Front-End").pause(750).delete(9).pause(500)
                      .type("Back-End").pause(750).delete(8).pause(500)
                      .type("Full-Stack");
                    return instance;
                  }}
                />
              </span>
            </p>

            <div>
              <button className='CVButton'>Download CV</button>
              <a href='#contact'>
                <button className='ContactButton'>Entrar em contato</button>
              </a>
            </div>
          </div>

          <div>
            <img className='imageProfile' src={Image1} alt='Waving cartoon' />
          </div>
        </section>

        <section className="sections" id='aboutMe'>
          <div>
            <h2 className='subtitles'>Sobre mim</h2>

            <p className='summary'>
              Desenvolvedor full-stack com experiência em React, Node.js, Angular e TypeScript,
              além de conhecimentos em HTML, CSS, Python, Styled Components e Git. Atuação em
              projetos desafiadores, incluindo chatbots, e-commerce e aplicações web escaláveis,
              utilizando metodologias ágeis e boas práticas de desenvolvimento.
            </p>

            <p className='summary'>
              Meu bom relacionamento interpessoal, comunicação e flexibilidade me levaram a
              participar do projeto voluntário SouJunior, onde contribuo para o desenvolvimento de projetos
              open source voltados à comunidade dev. Essa experiência fortalece minhas
              habilidades em trabalho em equipe, inovação e mentoria técnica.
            </p>
          </div>

          <div className='highlight'>

            <div className='featuredCards'>
              <div className='iconInHighlights'>
                <img src={ProfileIcon} alt='Profile Icon' />
              </div>
              <div className='information'>
                <h4>Meu Nome</h4>
                <p>Vanilo Ferreira</p>
              </div>
            </div>

            <div className='featuredCards'>
              <div className='iconInHighlights'>
                <img src={EmailIcon} alt='E-mail Icon' />
              </div>
              <div className='information'>
                <h4>E-mail</h4>
                <p>vanilo.ferreira03@gmail.com</p>
              </div>
            </div>

            <div className='featuredCards'>
              <div className='iconInHighlights'>
                <img src={InstagramIcon} alt='Instagram Icon' />
              </div>
              <div className='information'>
                <h4>Instagram</h4>
                <p>vsf_erreira</p>
              </div>
            </div>

            <div className='featuredCards'>
              <div className='iconInHighlights'>
                <img src={PhoneIcon} alt='Phone Icon' />
              </div>
              <div className='information'>
                <h4>Telefone</h4>
                <p>(71) 9 9309-2086</p>
              </div>
            </div>

          </div>
        </section>

        <section id='projects'>
          <h2 className='subtitles'>Projetos</h2>

          <div className='projectCards'>

            <div className='card'>
              <div className='cardImage'></div>
              <div className='cardDetails'>
                <p className='cardTitle'>Título do Projeto</p>
                <p className='stacks'>Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>

            <div className='card'>
              <div className='cardImage'></div>
              <div className='cardDetails'>
                <p className='cardTitle'>Título do Projeto</p>
                <p className='stacks'>Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>

            <div className='card'>
              <div className='cardImage'></div>
              <div className='cardDetails'>
                <p className='cardTitle'>Título do Projeto</p>
                <p className='stacks'>Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>

            <div className='card'>
              <div className='cardImage'></div>
              <div className='cardDetails'>
                <p className='cardTitle'>Título do Projeto</p>
                <p className='stacks'>Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>

            <div className='card'>
              <div className='cardImage'></div>
              <div className='cardDetails'>
                <p className='cardTitle'>Título do Projeto</p>
                <p className='stacks'>Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>

            <div className='card'>
              <div className='cardImage'></div>
              <div className='cardDetails'>
                <p className='cardTitle'>Título do Projeto</p>
                <p className='stacks'>Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>

          </div>
        </section>

        <section id='services'>
          <h2 className='subtitles'>Serviços</h2>

          <div className='containerServices'>

            <div className='serviceCard'>
              <img src={FigmaIcon} alt='FigmaIcon' />
              <p>Criação <br />de sites</p>
            </div>

            <div className='serviceCard'>
              <img src={CodeIcon} alt='Code Icon' />
              <p>Criação <br />de API</p>
            </div>

            <div className='serviceCard'>
              <img src={TabletIcon} alt='Tablet Icon' />
              <p>Sites <br />responsivos</p>
            </div>

          </div>
        </section>

        <section id='mySkills'>
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
        </section>

        <section className='contact' id='contact'>
          <div className='containerContact'>
            <div className='containerInformation'>
              <p className='subtitleContact'>Entrar em contato</p>
              <p className='contactParagraph'>
                Sou muito acessível e adoraria falar com você. Fique à vontade para ligar, me envie um e-mail.
                Siga-me nas redes sociais ou simplesmente preencha o formulário de consulta.
              </p>

              <div className='contactDetails'>
                <figure>
                  <img src={PhoneIcon2} alt='Phone Icon' />
                </figure>
                <p>(71) 9 9309-2086</p>
              </div>

              <div className='contactDetails'>
                <figure>
                  <img src={EmailIcon2} alt='E-mail Icon' />
                </figure>
                <p>vanilo.ferreira03@gmail.com</p>
              </div>
            </div>
            <div className='containerForm'>
              <p className='subtitleContact'>Me mande uma mensagem</p>
              <form className='form'>
                <input type='text' placeholder='Nome' />
                <input type='text' placeholder='E-mail' />
                <input type='text' placeholder='Assunto' />
                <input type='text' placeholder='Sua mensagem' id='yourMessage' />
                <button className='contactButton'>Enviar mensagem</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
