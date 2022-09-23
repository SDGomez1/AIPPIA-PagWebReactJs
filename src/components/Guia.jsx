import React from 'react';
import '@styles/Guia.scss'
const Guia = () => {
    return (
        <div id="guia-full-container">
        <div className="guia-container">
            <div id ="guia-img"></div>
            <div id="guia-container-text">
                <p>Querer luchar por el planeta mientras otros hacen lo contrario, afectando todo tu trabajo y esfuerzo,
                    puede resultar desesperante verdad?
                </p>
                <p>
                    Hacer miles de cambios en tu vida para ayudar al medio ambiente para que despues sea insuficiente 
                     e invisibilizado por las mismas prácticas de siempre.. Querer alzar tu voz para ayudar a los problemas ambientales pero simplemente no eres escuchado, el planeta se degrada y la vida desaparece, se vuelve más dificil hacer un cambio por ti mismo y ya no sabes que hacer...
                </p>
            </div>
        </div>
        <div id="guia-container-empth">
            <h2 id = "guia-empth-title">¡Pero ahora estas Aquí!</h2>
            <p id = "guia-empth-text">Sabemos que quieres hacer lo mejor, quieres lograr éxito en tus acciones y salvar miles de vidas. </p>
        </div>
    </div>
    ); 
}

export default Guia;