import './styles.css';

import CodeIcon from '../../assets/codeIcon.svg';
import FigmaIcon from '../../assets/figmaIcon.svg';
import TabletIcon from '../../assets/tabletIcon.svg';

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