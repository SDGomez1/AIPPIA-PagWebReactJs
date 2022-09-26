import React from 'react'
import '@styles/Productos.scss'
import { useNavigate } from 'react-router-dom';

const page = '/comments'


const text_input = [
    '¿Cómo actuamos?',
    ' Vegetales cultivados en un ambiente controlado y cerrado',
    'la producción se cultiva verticalmente',
    'crece en condiciones óptimas para su desarrollo con control de luz, agua y nutrientes.',
    'No se utilizan pesticidas ni químicos.',
    ' Cultivados con técnicas hidropónicas.',
    'Se cultivan dentro de la ciudad',
    'Los quiero ya'
]


const Productos = () => {


    let navigate = useNavigate();
    function handleClick() {
    navigate(page);
  };
    return (
        <div className="product-container-full ">
        <h1>
            {text_input[0]}    
        </h1>

        <div id="producto-text-img-container" className='desktop'>
            <div className="producto-text-container " id ="producto-text-container1">
                <p className='productos-p'> 
                    {text_input[1]}
                </p>
                <p className='productos-p'>
                    {text_input[2]}
                </p>
                <p className='productos-p'>
                    {text_input[3]}
                </p>
            </div>
            <div id = "producto-img">

            </div>
            <div className="producto-text-container" id = "producto-text-container2">
                <p className='productos-p'>
                    {text_input[4]}
                </p>
                <p className='productos-p'>
                    {text_input[5]} 
                </p>
                <p className='productos-p'>
                    {text_input[6]}             
                </p>
            </div>
        </div>


        
        <div id="producto-text-img-container" className='mobile'>
            
            <div id = "producto-img">

            </div>
            <div className='mobile-text-container'>
            <div className="producto-text-container " id ="producto-text-container1">
                <p className='productos-p'>
                    {text_input[1]}
                </p >
                <p className='productos-p'>
                    {text_input[2]}     
                </p>
                <p className='productos-p'>
                    {text_input[3]}
                </p>
            </div>
            <div className="producto-text-container" id = "producto-text-container2">
                <p className='productos-p'>
                    {text_input[4]}
                </p>
                <p className='productos-p'>
                    {text_input[5]}
                </p>
                <p className='productos-p'>
                    {text_input[6]}                                  
                </p>
                </div>
            </div>
        </div>

        <div id ="producto-CTA-container">
            <button onClick={handleClick}>
                 {text_input[7]} 
            </button>
        </div>
    </div>
    );
}

export default Productos;