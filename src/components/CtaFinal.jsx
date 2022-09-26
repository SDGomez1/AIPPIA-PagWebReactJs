import React, { Fragment, useState } from 'react'
import '@styles/CtaFinal.scss'
import { useNavigate } from 'react-router-dom';


const page = '/comments'
const text_input = [
    'Mira lo que puedes lograr con vegetales AIPPIA',
    'Consiguelos! '

]

const list_text = [

    ' Los vegetales AIPPIA te aportan mayor cantidad nutricional y beneficios a tu salud.',
    'No tienes necesidad de lavarlos ya que se plantan sin tierra y fuera de insectos, se tiene un protocolo riguroso sanitario en cada vegetal.',
    'Los vegetales que llegan a tu mesa reducen la emisión de CO2 ya que al cultivarse dentro de la ciudad no es necesario transportarlos a largas distancias.',
    'Ayudas a que ya no sea necesario buscar grandes extensiones de tierra para cultivar masivamente, ya que los vegetales de AIPPIA se cultiva en forma vertical.'

]

const list_items = list_text.map((item, index) => {
    return <li key = {index}className='CTA-final-list-items'>{item}</li>
});

const CtaFinal = () => {

    let navigate = useNavigate();
    function handleClick() {
        navigate(page);
    }

    return (

        <Fragment>
            <div className="CTA-final-container-full CTA-final-desktop">
                <div className="CTA-final-container">
                    <h2> {text_input[0]}</h2>
                    <ul>
                        {list_items}
                    </ul>
                </div>

                <div id="CTA-final-img">

                </div>

            </div>
            <div className="CTA-final-container-full CTA-final-mobile">
                <h2 id='CTA-final-title'>
                    {text_input[0]}
                </h2>

                <div id="CTA-final-img">

                </div>

                <div className="CTA-final-container">
                    <ul>
                        {list_items}
                    </ul>
                </div>

            </div>
            <div id="CTA-final-button" >

                <button onClick={handleClick}>
                    {text_input[1]}
                </button>

            </div>
        </Fragment>
    )
}

export default CtaFinal;