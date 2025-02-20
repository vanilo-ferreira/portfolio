import './style.css';

import EmailIcon2 from '../../assets/emailIcon2.svg';
import PhoneIcon2 from '../../assets/phoneIcon2.svg';

export function Contact() {
    return (
        <div className='contact' id='contact'>
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
        </div>
    )
};