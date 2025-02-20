import './index.css';

import EmailIcon2 from './assets/emailIcon2.svg';
import PhoneIcon2 from './assets/phoneIcon2.svg';

import { Top } from './components/Top/Top';
import { Profile } from './components/Profile/Profile';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Projects } from './components/Projects/Projects';
import { TypesServices } from './components/TypesServices/TypesServices';
import { MySkills } from './components/MySkills/MySkills';

function App() {
  return (
    <>
      <Top />

      <main>
        <Profile />
        <AboutMe />
        <Projects />
        <TypesServices />
        <MySkills />

        <section className='contact' id='contact'>
          <div className='containerContact'>
            <div className='containerInformation'>
              <p className='subtitleContact'>Entrar em contato</p>
              <p className='contactParagraph'>
                Sou muito acessível e adoraria falar com você. Fique à vontade
                para ligar, me envie um e-mail. Siga-me nas redes sociais ou
                simplesmente preencha o formulário de consulta.
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
                <input
                  type='text'
                  placeholder='Sua mensagem'
                  id='yourMessage'
                />
                <button className='contactButton'>Enviar mensagem</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;