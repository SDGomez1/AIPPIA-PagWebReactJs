import React, { Fragment } from 'react'
import '@styles/Hero.scss'
import { useNavigate } from 'react-router-dom';
import animate from '../scripts/scroll';

const page = '/comments';
const Hero = () => {
    let navigate = useNavigate();
    function handleClick() {
        navigate(page);
    }


    const text_input = [ 
        'Consume vegetales y resalta con trasformación',
        'conquista tu futuro y el del planeta cosumiendo vegetales limpios y frescos',
        '¿Imaginas reducir tu huella ambiental con vegetales modernos?',
        '¡Haz parte de la revolución tecnológica!',
        'Descubre ahora'
    ]

    return (
        <Fragment>
            <div className="hero-container">

                <h1 id="hero-title"  >
                    {text_input[0]}
                </h1>
                <h2 id="hero-subtitle" >
                    {text_input[1]}
                </h2>
            </div>

            <div className="hero-CTA-container">

                <h2 id="hero-CTA-subtitle"  >
                     {text_input[2]}
                </h2>
                <p id="hero-CTA-text" >
                {text_input[3]}
                </p>
                <button id="hero-CTA-button" onClick={handleClick} >
                {text_input[4]}
                </button>
            </div>
        </Fragment>
    );
}

export default Hero;