import React, { Fragment, useState } from 'react'
import '@styles/CtaFinal.scss'
import {useNavigate} from 'react-router-dom';


const page = '/comments'


const CtaFinal = () => {
    let navigate = useNavigate();
    function handleClick() {
    navigate(page);
  }

    return (
        
        <Fragment>
        <div className="CTA-final-container-full CTA-final-desktop">
            <div className="CTA-final-container">
                <h2>Mira lo que puedes lograr con vegetales AIPPIA</h2>
                <ul>
                    <li>
                        Los vegetales AIPPIA te aportan mayor cantidad nutricional y beneficios a tu salud.
                    </li>
                    <li>
                        No tienes necesidad de lavarlos ya que se plantan sin tierra y fuera de insectos, se tiene un protocolo riguroso sanitario en cada vegetal.
                    </li>
                    <li>
                        Los vegetales que llegan a tu mesa reducen la emisión de CO2 ya que al cultivarse dentro de la ciudad no es necesario transportarlos a largas distancias.   
                    </li>
                    <li>
                        Ayudas a que ya no sea necesario buscar grandes extensiones de tierra para cultivar masivamente, ya que los vegetales de AIPPIA se cultiva en forma vertical.
                    </li>
                </ul>
            </div>
    
    
    
            <div id ="CTA-final-img">
                
            </div>
            
        </div>
        <div className="CTA-final-container-full CTA-final-mobile">
        <h2 id='CTA-final-title'>Mira lo que puedes lograr con vegetales AIPPIA</h2>

        <div id ="CTA-final-img">
                
            </div>

            <div className="CTA-final-container">
                <ul>
                    <li className='CTA-final-list-items'>
                        Los vegetales AIPPIA te aportan mayor cantidad nutricional y beneficios a tu salud.
                    </li>
                    <li className='CTA-final-list-items'>
                        No tienes necesidad de lavarlos ya que se plantan sin tierra y fuera de insectos, se tiene un protocolo riguroso sanitario en cada vegetal.
                    </li>
                    <li className='CTA-final-list-items'>
                        Los vegetales que llegan a tu mesa reducen la emisión de CO2 ya que al cultivarse dentro de la ciudad no es necesario transportarlos a largas distancias.   
                    </li>
                    <li className='CTA-final-list-items'>
                        Ayudas a que ya no sea necesario buscar grandes extensiones de tierra para cultivar masivamente, ya que los vegetales de AIPPIA se cultiva en forma vertical.
                    </li>
                </ul>
            </div>
    
    
    
            
            
        </div>
        <div id = "CTA-final-button" >

            <button onClick={handleClick}>Consiguelos! </button>
           
        </div>
        </Fragment>
    )
}

export default CtaFinal;