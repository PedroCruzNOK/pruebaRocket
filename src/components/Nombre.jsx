import React from 'react';
import '../App.css';
import { useState } from 'react';
import Fecha from './Fecha';

function Nombre() {
    const [nombre, setNombre] = useState('');
    const [apaterno, setApaterno] = useState('');
    const [amaterno, setAmaterno] = useState('');
    return (

    <div>
         <div className='row'>
        <div className='col-2'>
            <picture className=''>
                <img src="https://st.depositphotos.com/2069323/2156/i/600/depositphotos_21568765-stock-photo-casual-businessman-pointing.jpg" className="img-fluid img-thumbnail  border border-2 border-danger" alt="..." width="70" height="70"/>
            </picture>
        </div>
        <div className='col-9'>
            <div className='row  bg-secondary p-5 text-dark bg-opacity-10'>
            <form className=''
                onSubmit={ev => {
                    ev.preventDefault();
                    setNombre(ev.target.nombre.value);
                    setApaterno(ev.target.apaterno.value);
                    setAmaterno(ev.target.amaterno.value);
                    
                }}
            >
                <h2>¿Cual es tu nombre?</h2>
                <div className="mb-3">
                    <label  className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" aria-describedby="emailHelp" />
                    <div id="nombreAyuda" className="form-text">Aqui debes de escribir tu nombre.</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Apellido paterno</label>
                    <input type="text" className="form-control" name="apaterno" aria-describedby="emailHelp" />
                    <div id="nombreAyuda" className="form-text">Aqui debes de escribir tu apellido paterno.</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Apellido materno</label>
                    <input type="text" className="form-control" name="amaterno" aria-describedby="emailHelp" />
                    <div id="nombreAyuda" className="form-text">Aqui debes de escribir tu apellido materno.</div>
                </div>
                <button type='submit'>Siguiente</button>
            </form>
            </div>
            <br></br>
            <div className='row  primaryColor p-5 text-dark bg-opacity-10'>
                <p id='contacto'>Nombre: {nombre} A.Paterno: {apaterno} A.Materno: {amaterno}</p>
            </div>
            
        </div>
    
        
        
    </div>
    <br></br>
    <div className='row'>
    
            <Fecha nombre = {nombre} apaterno = {apaterno} amaterno = {amaterno}></Fecha>
    </div>

    </div>
   
        
    
    );
}

export default Nombre;