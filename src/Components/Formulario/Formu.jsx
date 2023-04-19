import React from 'react';
import './Formu.css'


const Formula = () => {
    return(
        <div className='ContenedorFormulario'>
            <div className='contenedor_Titulo_Parrafo'>
            <h2 className='tituloForm'>Feel Free To Ask</h2>
            <p className='parrafo'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, tempore molestias eaque magni atque id laboriosam consectetur.</p>
            </div>
            
            <form className='Formulario' >
                <div className='input_1'>
                    <input className='inputNombre' type="text" placeholder='Nombre'/>
                    <input className='inputGmail' type="text" placeholder='gmail' />
                </div>

                <div className='input_2'>
                    <textarea className='descripcion' name="" id="" cols="30" rows="10" placeholder='Your text'></textarea>
                    <button className='boton'>Send</button>
                </div>
            </form>
            

        </div>
    )
}

export default Formula