import './styles.css';

import CodeIcon from '../../assets/icons/codeIcon.svg';
import FigmaIcon from '../../assets/icons/figmaIcon.svg';
import TabletIcon from '../../assets/icons/tabletIcon.svg';

export function TypesServices() {
    return (
        <div id='services'>
            <h2 className='subtitles'>Serviços</h2>

            <div className='containerServices'>
                <div className='serviceCard'>
                    <img src={FigmaIcon} alt='FigmaIcon' />
                    <p>
                        Criação <br />
                        de sites
                    </p>
                </div>

                <div className='serviceCard'>
                    <img src={CodeIcon} alt='Code Icon' />
                    <p>
                        Criação <br />
                        de API
                    </p>
                </div>

                <div className='serviceCard'>
                    <img src={TabletIcon} alt='Tablet Icon' />
                    <p>
                        Sites <br />
                        responsivos
                    </p>
                </div>
            </div>
        </div>
    )
};