import React from 'react';
import '../App.css';
import { useState } from 'react';
import Contacto from './Contacto';

function Fecha(props) {
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
    const nombre = props.nombre;
    const apaterno = props.apaterno;
    const amaterno= props.amaterno;
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
                        setDia(ev.target.dia.value);
                        setMes(ev.target.mes.value);
                        setAno(ev.target.ano.value);
                        
                    }}
                
                >
                    <h2>¿Cual es tu fecha de cumpleaños?</h2>
                    <div className="mb-3">
                        <label  className="form-label">Dia</label>
                        <input type="text" className="form-control" name="dia" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Mes</label>
                        <input type="text" className="form-control" name="mes" aria-describedby="mes" />
                        
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Año</label>
                        <input type="text" className="form-control" name="ano" aria-describedby="año" />
                        
                    </div>
                    <button type='submit'>Siguiente</button>
                </form>
                </div>
                <br></br>
                <div className='row  primaryColor p-5 text-dark bg-opacity-10'>
                    <p id='contacto'>Año: {ano} Mes: {mes}  Dia {dia}</p>
                </div>
                
            </div>
        
            
            
        </div>
        <br></br>
        <div className='row'>
        
                <Contacto nombre = {nombre} apaterno = {apaterno} amaterno = {amaterno} ano = {ano} mes = {mes} dia= {dia}></Contacto>
        </div>
        
    </div>
    );
}

export default Fecha;