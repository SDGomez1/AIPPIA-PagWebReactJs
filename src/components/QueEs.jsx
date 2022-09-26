import React from 'react'
import '@styles/QueEs.scss'

const text_input = [
    'AIPPIA esta dispuesta a luchar contigo porque creemos que puedes transformar tu vida en algo mejor.',
    'La tecnología AIPPIA te ayudará a luchar contra las prácticas no sostenibles con vegetales modernos'
]

const QueEs = () => {
    return (
        <div className="que-es-container">
        <div id = "que-es-text1">
            <p className='que-es-text-p'>
                {text_input[0]}
            </p>
            
        </div>
        <div id = "que-es-text2">
           <p className='que-es-text-p'> 
                {text_input[1]}
           </p>
        </div>
    </div>  
    );
}
export default QueEs