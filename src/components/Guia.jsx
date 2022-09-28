import React from 'react';
import '@styles/Guia.scss'

const text_input = [
    'Es desilusionante...',
    'Querer luchar por el planeta mientras otros hacen lo contrario, afectando todo tu trabajo y esfuerzo, puede resultar desesperante verdad?',
    'Hacer miles de cambios en tu vida para ayudar al medio ambiente para que despues sea insuficiente e invisibilizado por las mismas prácticas de siempre.. Querer alzar tu voz para ayudar a los problemas ambientales pero simplemente no eres escuchado, el planeta se degrada y la vida desaparece, se vuelve más dificil hacer un cambio por ti mismo y ya no sabes que hacer...',
    '¡Pero ahora estas Aquí!',
    'Sabemos que quieres hacer lo mejor, quieres lograr éxito en tus acciones y salvar miles de vidas.'

];



const Guia = () => {
    return (
        <div id="guia-full-container">
        <div className="guia-container">
            <div id ="guia-img">
                
            </div>
            <div id="guia-container-text">
                <h2>
                    {text_input[0]}
                </h2>
                <p className='guia-text'>
                    {text_input[1]}
                </p>
                <p className='guia-text'>
                    {text_input[2]}
                </p>
            </div>
        </div>
        <div id="guia-container-empth">
            <h2 id = "guia-empth-title">
                 {text_input[3]}
            </h2>
            <p id = "guia-empth-text">
            {text_input[4]}
             </p>
        </div>
    </div>
    ); 
}

export default Guia;