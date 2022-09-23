import React from 'react'
import '@styles/Comments.scss'
import logoReduced from '@icons/aippiaLogoReduced.svg';
const Comments = () => {
    return (

        <div className="comments-container-full">

        <h2>
            ¡Gracias por querer cambiar al mundo!   
        </h2>
        <p>
            Aún estamos en construcción, pero queremos que seas de los primeros en obtener nuestros productos!
        </p>

        <div id = "comments-form-container">

               <h3>
                Da el primer paso a la transformación
              </h3> 

              <p>
                Haz que todos quieran seguir tus pasos, creemos en ti. 
              </p>
              <div className="comments-button-container">
                <form>
                    <input type="text" value="Email"/>
                </form>
                <button>suscribirse</button>

              </div>

            <div className="comments-button-container">
                <form>
                    <input type="text" value="Comentarios"/>
                </form>
                <button>subir comentario</button>

            </div>

            
        </div>
        <img  id = "comments-logo" src={logoReduced} alt="Logo"/>
    </div>
    );
}

export default Comments;