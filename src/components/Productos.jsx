import React from 'react'
import '@styles/Productos.scss'


const Productos = () => {
    return (
        <div className="product-container-full">
        <h1>¿Cómo actuamos? </h1>

        <div id="producto-text-img-container">
            <div className="producto-text-container" id ="producto-text-container1">
                <p>
                    Vegetales cultivados en un ambiente controlado y cerrado
                </p>
                <p>
                    la producción se cultiva verticalmente
                </p>
                <p>
                    crece en condiciones óptimas para su desarrollo con control de luz, agua y nutrientes.
                </p>
            </div>
            <div id = "producto-img">

            </div>
            <div className="producto-text-container" id = "producto-text-container2">
                <p>
                    No se utilizan pesticidas ni químicos.
                </p>
                <p>
                    Cultivados con técnicas hidropónicas.
                </p>
                <p>
                    Se cultivan dentro de la ciudad
                                        

                </p>
            </div>
        </div>
        <div id ="producto-CTA-container">
            <button>Los quiero ya</button>
        </div>
    </div>
    );
}

export default Productos;