import React from 'react'
import '@styles/Vegetales.scss'

const Vegetales = () => {
    return (
    <div className="vegetales-container-full">

        <h1>
            Conoce los vegetales modernos de AIPPIA 
        </h1>

        <div className="vegetales-img-text-container">
            <div className="vegetales-img">

            </div>
            <h2 className="vegetales-text">
                Más frescos 
            </h2>
        </div>
        <div className="vegetales-img-text-container vegetales-desktop">
           
            <h2 className="vegetales-text" id="ve">
                Más limpios 
            </h2>
            <div className="vegetales-img">

            </div>
        </div >
        <div className="vegetales-img-text-container vegetales-mobile">
           
          
           <div className="vegetales-img">

           </div>
           <h2 className="vegetales-text" id="ve">
               Más limpios 
           </h2>
       </div >
        <div className="vegetales-img-text-container">
            <div className="vegetales-img">

            </div>
            <h2 className="vegetales-text">
                Más saludables
            </h2>
        </div>


    </div>
    )
}

export default Vegetales;