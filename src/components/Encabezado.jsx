import React from 'react';
import '../App.css';

function Encabezado() {
    return (
        <div className='row  primaryColor p-5 text-dark bg-opacity-10'>
            <div className='col-8'>
                <div className='row'>
                <h2 className=''>Titulo del formulario</h2>
                </div>
                <div className='row'>
                <h6 className=''>Tienes 5 minutos para contestar</h6>
                </div>
                
            </div>
            
            <div className='col-4'>
           
            </div>
            
        </div>
    );
}
export default Encabezado;
