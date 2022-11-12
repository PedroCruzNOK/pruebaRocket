import React from 'react';
import '../App.css';
import { useState } from 'react';
import axios from "axios";

const baseURL = "http://localhost:5000/usuarios";

function Contacto(props) {
    const [tel, setTel] = useState('');
    const [correo, setCorreo] = useState('');
    const nombre = props.nombre;
    const apaterno = props.apaterno;
    const amaterno= props.amaterno;
    const dia = props.dia;
    const mes = props.mes;
    const ano = props.ano;

  
    function mostrar(){
        axios.post(baseURL, { 
            nombre: nombre,
            apaterno: apaterno,
            amaterno: amaterno,
            dia: dia,
            mes: mes,
            ano: ano,
            correo: correo,
            telefono: tel
         }).then(({data})=> console.log(data))
    }
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
                        setTel(ev.target.tel.value);
                        setCorreo(ev.target.correo.value);
                    }}
                >
                    <h2>Datos de contacto</h2>
                    <div className="mb-3">
                        <label  className="form-label">Correo electronico</label>
                        <input type="text" className="form-control" id="correo" aria-describedby="correo" />
                        
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Telefono</label>
                        <input type="text" className="form-control" name="tel" aria-describedby="telefono" autoComplete='off' />
                        
                    </div>
                    <button type='submit'>Siguiente</button>
                </form>
                </div>
                <br></br>
                <div className='row  primaryColor p-5 text-dark bg-opacity-10'>
                    
                    <p id='contacto'>Correo: {correo} <br/>Telefono: {tel}</p>
                    
                    
                </div>
                
            </div>
w
        </div>
    <br></br>
    <div className='row'>
    <button className='btn btn-danger' onClick={mostrar}>Enviar Formulario</button>
    </div>
    <br></br>
    <div className='row  primaryColor p-5 text-dark bg-opacity-10'>
                    
        <p>NOMBRE: {nombre} A.PATERNO: {apaterno} A.MATERNO: {amaterno} DIA: {dia} MES: {mes} AÑO:  {ano} CORREO: {correo} TELEFONO: {tel}</p>
                    
                    
    </div>  

</div>
    
    );

}

export default Contacto;