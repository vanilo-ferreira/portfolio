import './index.css';

import Image1 from './assets/image1.png';
import ProfileIcon from './assets/profileIcon.svg';
import EmailIcon from './assets/emailIcon.svg';
import InstagramIcon from './assets/instagramIcon.svg';
import PhoneIcon from './assets/phoneIcon.svg';

import CodeIcon from './assets/codeIcon.svg';
import FigmaIcon from './assets/figmaIcon.svg';
import TabletIcon from './assets/tabletIcon.svg';

import HTMLIcon from './assets/htmlIcon.svg';
import CSSIcon from './assets/codeIcon.svg';
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
            <h1>Olá, eu sou o <br />Vanilo Ferreira :)</h1>
            <p>Desenvolvedor <span>Front-End</span></p>

            <div>
              <button className='CVButton'>Download CV</button>
              <button className='ContactButton'>Entrar em contato</button>
            </div>
          </div>

          <div>
            <img className='imageProfile' src={Image1} alt='Waving cartoon' />
          </div>
        </section>

        <section id='aboutMe'>
          <div>
            <h2>Sobre mim</h2>

            <p>
              Recém-formado em Sistemas de Informação com conhecimentos em linguagens de
              programação, banco de dados e desenvolvimento web. Habilidade em resolução de
              problemas e aprendizagem rápida.
              Busco oportunidades para aplicar meu conhecimento no intuito de me desenvolver
              profissionalmente, enquanto auxilio no crescimento da empresa.
            </p>
          </div>

          <div>

            <div>
              <div>
                <img src={ProfileIcon} alt='Profile Icon' />
              </div>
              <div>
                <h4>Meu Nome</h4>
                <p>Vanilo Ferreira</p>
              </div>
            </div>

            <div>
              <div>
                <img src={EmailIcon} alt='E-mail Icon' />
              </div>
              <div>
                <h4>E-mail</h4>
                <p>vanilo.ferreira03@gmail.com</p>
              </div>
            </div>

            <div>
              <div>
                <img src={InstagramIcon} alt='Instagram Icon' />
              </div>
              <div>
                <h4>Instagram</h4>
                <p>vsf_erreira</p>
              </div>
            </div>

            <div>
              <div>
                <img src={PhoneIcon} alt='Phone Icon' />
              </div>
              <div>
                <h4>Telefone</h4>
                <p>(71) 9 9309-2086</p>
              </div>
            </div>

          </div>
        </section>

        <section id='projects'>
          <h2>Projetos</h2>

          <div>

            <div>
              <div>Imagem do projeto</div>
              <div>
                <p>Título do Projeto</p>
                <p>Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>

            <div>
              <div>Imagem do projeto</div>
              <div>
                <p>Título do Projeto</p>
                <p>Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>

            <div>
              <div>Imagem do projeto</div>
              <div>
                <p>Título do Projeto</p>
                <p>Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>

            <div>
              <div>Imagem do projeto</div>
              <div>
                <p>Título do Projeto</p>
                <p>Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>

            <div>
              <div>Imagem do projeto</div>
              <div>
                <p>Título do Projeto</p>
                <p>Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>

            <div>
              <div>Imagem do projeto</div>
              <div>
                <p>Título do Projeto</p>
                <p>Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>
          </div>
        </section>

        <section id='services'>
          <h2>Serviços</h2>
          <div>

            <div>
              <img src={FigmaIcon} alt='FigmaIcon' />
              <p>Criação <br />de sites</p>
            </div>

            <div>
              <img src={CodeIcon} alt='Code Icon' />
              <p>Criação <br />de API</p>
            </div>

            <div>
              <img src={TabletIcon} alt='Tablet Icon' />
              <p>Sites <br />responsivos</p>
            </div>

          </div>
        </section>

        <section id='mySkills'>
          <h2>Minhas skills</h2>

          <div>

            <div>
              <img src={HTMLIcon} alt='HTML Logo' />
              <p>HTML</p>
            </div>

            <div>
              <img src={CSSIcon} alt='CSS Logo' />
              <p>CSS</p>
            </div>

            <div>
              <img src={JSIcon} alt='Javascript Logo' />
              <p>JAVASCRIPT</p>
            </div>

            <div>
              <img src={TailwindIcon} alt='Tailwind Logo' />
              <p>TAILWIND</p>
            </div>

            <div>
              <img src={ReactIcon} alt='React Logo' />
              <p>REACT</p>
            </div>

            <div>
              <img src={NextIcon} alt='Next.js Logo' />
              <p>NEXT.js</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <p>Entrar em contato</p>
              <p>
                Sou muito acessível e adoraria falar com você. Fique à vontade para ligar, me envie um e-mail.
                Siga-me nas redes sociais ou simplesmente preencha o formulário de consulta.
              </p>

              <div>
                <img src={PhoneIcon2} alt='Phone Icon' />
                <p>(71) 9 9309-2086</p>
              </div>

              <div>
                <img src={EmailIcon2} alt='E-mail Icon' />
                <p>vanilo.ferreira03@gmail.com</p>
              </div>
            </div>
            <div>
              <p>Me mande uma mensagem</p>
              <form>
                <input type='text' placeholder='Nome' />
                <input type='text' placeholder='E-mail' />
                <input type='text' placeholder='Assunto' />
                <input type='text' placeholder='Sua mensagem' />
                <button>Enviar mensagem</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
