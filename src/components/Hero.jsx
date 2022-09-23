import React, { Fragment } from 'react'
import '@styles/Hero.scss'
const Hero = () => {
    return (
        <Fragment>
        <div className="hero-container">

            <h1 id="hero-title">
                Consume vegetales y resalta con trasformación 
            </h1>
            <h2 id = "hero-subtitle">
                conquista tu futuro y el del planeta cosumiendo vegetales limpios y frescos 
            </h2>
        </div>

        <div className="hero-CTA-container">

            <h2 id = "hero-CTA-subtitle">
                ¿Imaginas reducir tu huella ambiental con vegetales modernos?
            </h2>
            <p id = "hero-CTA-text">
                ¡Haz parte de la revolución tecnológica!
            </p>
            <button id = "hero-CTA-button"> Descubre ahora</button>
        </div>
        </Fragment>
    );
}

export default Hero;