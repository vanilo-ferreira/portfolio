import Image1 from './assets/image1.png'
import ProfileIcon from './assets/profileIcon.svg'
import EmailIcon from './assets/emailIcon.svg'
import InstagramIcon from './assets/instagramIcon.svg'
import PhoneIcon from './assets/phoneIcon.svg'

function App() {

  return (
    <>
      <header>
        <div>
          <h1>Portfólio</h1>
        </div>

        <nav>
          <p>Sobre mim</p>
          <p>Projetos</p>
          <p>Serviços</p>
          <p>Minhas skills</p>
        </nav>
      </header>
      <main>
        <section>
          <div>
            <h1>Olá, eu sou o <br />Vanilo Ferreira :)</h1>
            <p>Desenvolvedor Front-End</p>

            <div>
              <button>Download CV</button>
              <button>Entrar em contato</button>
            </div>

            <div>
              <img src={Image1} alt='Waving cartoon' />
            </div>
          </div>
        </section>

        <section>
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
                <img src={ProfileIcon} alt='Waving cartoon' />
              </div>
              <div>
                <h4>Meu Nome</h4>
                <p>Vanilo Ferreira</p>
              </div>
            </div>

            <div>
              <div>
                <img src={EmailIcon} alt='Waving cartoon' />
              </div>
              <div>
                <h4>E-mail</h4>
                <p>vanilo.ferreira03@gmail.com</p>
              </div>
            </div>

            <div>
              <div>
                <img src={InstagramIcon} alt='Waving cartoon' />
              </div>
              <div>
                <h4>Instagram</h4>
                <p>vsf_erreira</p>
              </div>
            </div>

            <div>
              <div>
                <img src={PhoneIcon} alt='Waving cartoon' />
              </div>
              <div>
                <h4>Telefone</h4>
                <p>(71) 9 9309-2086</p>
              </div>
            </div>

          </div>
        </section>

        <section>
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
      </main>
    </>
  )
}

export default App
