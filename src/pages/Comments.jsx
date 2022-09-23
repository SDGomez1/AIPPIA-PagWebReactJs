import React from 'react'
import '@styles/Comments.scss'
import logoReduced from '@icons/aippiaLogoReduced.svg';
import { useNavigate } from 'react-router-dom';

const page = ('/')
const Comments = () => {
    let navigate = useNavigate();
    function handleClick() {
    navigate(page);
  }
    return (

        <div className="comments-container-full">

        <h2 id='comments-title'>
            ¡Gracias por querer cambiar al mundo!   
        </h2>
        <p id='comments-subtitle'>
            Aún estamos en construcción, pero queremos que seas de los primeros en obtener nuestros productos!
        </p>

        <div id = "comments-form-container">

               <h3 id='comments-subsubtitle'>
                Da el primer paso a la transformación
              </h3> 

              <p id='comments-text'>
                Haz que todos quieran seguir tus pasos, creemos en ti. 
              </p>
              <div className="comments-button-container">
                <form>
                    <input type="text" placeholder ="Email" className='comments-input'/>
                </form>
                <button>suscribirse</button>

              </div>

            <div className="comments-button-container">
                <form>
                    <input type="text" placeholder ="Comentarios" className='comments-input'/>
                </form>
                <button>subir comentario</button>

            </div>

            
        </div>
        <img  id = "comments-logo" src={logoReduced} alt="Logo" onClick={handleClick}/>
    </div>
    );
}

export default Comments;