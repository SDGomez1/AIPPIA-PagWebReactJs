import React, { Fragment } from 'react'
import '@styles/Problematicas.scss'
const Problematicas = () => {
    return (
        <Fragment>
        <div className="problematicas-container">

            <div>
                <h1 id="problematicas-title">Colombia enfrenta</h1>
            </div>
            <div id="problematicas-item-container">
                <div className="problematicas-items">
                    <p className="problematicas-items-title"> 10M</p>
                    <p className="problematicas-items-text"> De hectareas de bosque quemadas para cultivos</p>
                </div>
                <div className="problematicas-items">
                    <p className="problematicas-items-title"> 10M</p>
                    <p className="problematicas-items-text"> De hectareas de bosque quemadas para cultivos</p>
                </div>
                <div className="problematicas-items">
                    <p className="problematicas-items-title"> 10M</p>
                    <p className="problematicas-items-text"> De hectareas de bosque quemadas para cultivos</p>
                </div>
            </div>
            </div>
            <div className="problematicas-second-container">
                <div id="problematicas-second-item-container">
                    <p  >
                        Estas prácticas no sostenibles son el mayor factor por el cual tu vida, la de los animales y del medio ambiente estan cada vez más afectados.
                    </p>
                    <div id="problematicas-second-img">

                    </div>

                    <p>
                        las malas prácticas del cuidado medio ambiental afectan los vegetales que consumes diariamente, en el campo colombiano muy pocos productores tienen la tecnología necesaria para que sus prácticas sean sostenibles.                </p>
                </div>
            </div>
            </Fragment>
    );
}

export default Problematicas;