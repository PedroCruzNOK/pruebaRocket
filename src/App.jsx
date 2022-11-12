import React from 'react';
import './App.css';
import Encabezado from './components/Encabezado';
import Nombre from './components/Nombre';




function App() {
  return (
    <div className='container  p-5 text-dark border'>
      <Encabezado />
      <br></br>
      <Nombre/>
    </div>
    
  );
}

export default App;
