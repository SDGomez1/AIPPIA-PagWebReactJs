import React from 'react'
import '@styles/Productos.scss'
import { useNavigate } from 'react-router-dom';

const page = '/comments'
const Productos = () => {
    let navigate = useNavigate();
    function handleClick() {
    navigate(page);
  }
    return (
        <div className="product-container-full ">
        <h1>¿Cómo actuamos? </h1>

        <div id="producto-text-img-container" className='desktop'>
            <div className="producto-text-container " id ="producto-text-container1">
                <p className='productos-p'> 
                    Vegetales cultivados en un ambiente controlado y cerrado
                </p>
                <p className='productos-p'>
                    la producción se cultiva verticalmente
                </p>
                <p className='productos-p'>
                    crece en condiciones óptimas para su desarrollo con control de luz, agua y nutrientes.
                </p>
            </div>
            <div id = "producto-img">

            </div>
            <div className="producto-text-container" id = "producto-text-container2">
                <p className='productos-p'>
                    No se utilizan pesticidas ni químicos.
                </p>
                <p className='productos-p'>
                    Cultivados con técnicas hidropónicas.
                </p>
                <p className='productos-p'>
                    Se cultivan dentro de la ciudad
                                        

                </p>
            </div>
        </div>


        
        <div id="producto-text-img-container" className='mobile'>
            
            <div id = "producto-img">

            </div>
            <div className='mobile-text-container'>
            <div className="producto-text-container " id ="producto-text-container1">
                <p className='productos-p'>
                    Vegetales cultivados en un ambiente controlado y cerrado
                </p >
                <p className='productos-p'>
                    la producción se cultiva verticalmente
                </p>
                <p className='productos-p'>
                    crece en condiciones óptimas para su desarrollo con control de luz, agua y nutrientes.
                </p>
            </div>
            <div className="producto-text-container" id = "producto-text-container2">
                <p className='productos-p'>
                    No se utilizan pesticidas ni químicos.
                </p>
                <p className='productos-p'>
                    Cultivados con técnicas hidropónicas.
                </p>
                <p className='productos-p'>
                    Se cultivan dentro de la ciudad
                                        

                </p>
                </div>
            </div>
        </div>

        <div id ="producto-CTA-container">
            <button onClick={handleClick}>Los quiero ya</button>
        </div>
    </div>
    );
}

export default Productos;