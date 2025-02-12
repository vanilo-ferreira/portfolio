import Image1 from './assets/image1.png'

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
              <img src={Image1} alt='Waving cartoon'/>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
