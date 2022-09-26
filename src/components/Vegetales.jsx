import React from 'react'
import '@styles/Vegetales.scss'

const text_input = [
    'Conoce los vegetales modernos de AIPPIA',
    'Más frescos',
    'Más limpios ',
    'Más saludables'
]

const Vegetales = () => {
    return (
    <div className="vegetales-container-full">

        <h1>
            {text_input[0]}
        </h1>

        <div className="vegetales-img-text-container">
            <div id="vegetales-img1">

            </div>
            <h2 className="vegetales-text">
                {text_input[1]}
            </h2>
        </div>
        <div className="vegetales-img-text-container vegetales-desktop">
           
            <h2 className="vegetales-text" id="ve">
                 {text_input[2]}
            </h2>
            <div className="vegetales-img2">

            </div>
        </div >

        
        <div className="vegetales-img-text-container vegetales-mobile">
           
          
           <div className="vegetales-img2">

           </div>
           <h2 className="vegetales-text" id="ve">
                 {text_input[2]}
           </h2>
       </div >


       
        <div className="vegetales-img-text-container">
            <div id="vegetales-img3">

            </div>
            <h2 className="vegetales-text">
                {text_input[3]}
            </h2>
        </div>


    </div>
    )
}

export default Vegetales;