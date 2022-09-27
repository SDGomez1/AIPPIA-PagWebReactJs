import React, { Fragment } from 'react'
import '@styles/Problematicas.scss'

const text_input = [
    'Colombia enfrenta',
    'Las prácticas no sostenibles son el mayor factor por el cual tu vida, la de los animales y del medio ambiente estan cada vez más afectados.',
    'Estas malas prácticas al cuidado medio ambiental afectan los vegetales que consumes diariamente, en el campo colombiano muy pocos productores tienen la tecnología necesaria para que sus prácticas sean sostenibles. '           
]

const items_input = {
    number: ['10M', '100M', '200.000'],
    text: [
        'De hectareas de bosque quemadas para cultivos',
        'De litros de agua desperdiciados en cultivos',
        'Casos de intoxicación por glifosato'
        ]
}


const Problematicas = () => {
    return (
        <Fragment>
        <div className="problematicas-container">

            <div>
                <h1 id="problematicas-title">
                    {text_input[0]}
                </h1>
            </div>
            <div id="problematicas-item-container">
                <div className="problematicas-items">
                    <p className="problematicas-items-title"> {items_input.number[0]}</p>
                    <p className="problematicas-items-text"> {items_input.text[0]}</p>
                </div>
                <div className="problematicas-items">
                    <p className="problematicas-items-title"> {items_input.number[1]}</p>
                    <p className="problematicas-items-text"> {items_input.text[1]}</p>
                </div>
                <div className="problematicas-items">
                    <p className="problematicas-items-title"> {items_input.number[2]}</p>
                    <p className="problematicas-items-text"> {items_input.text[2]}</p>
                </div>
            </div>
            </div>
            <div className="problematicas-second-container-desktop">
                
                  
                    <div className="problematicas-second-img" >
                        <p id = 'problematicas-second-text'>
                        {text_input[1]}
                        </p>
                        <p>
                        {text_input[2]}
                        </p>
                    </div>
                    <div className="problematicas-second-img" id = 'problematicas-second-img2'>
                        
                    </div>
                    
                
            </div>

            <div className="problematicas-second-container-mobile">
                
                  
              
                <div  id = 'problematicas-second-img3'>
                    
                </div>
                <div className="problematicas-second-container" >
                    <p >
                    {text_input[1]}
                    </p>
                    <p id = 'problematicas-second-text'>
                    {text_input[2]}
                    </p>
                </div>
            
        </div>
            </Fragment>
    );
}

export default Problematicas;