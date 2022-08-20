import React,{useState} from 'react';
import TarjetaForm from './TarjetaForm';
import RespuestasCitas from './RespuestasCitas';

function Home() {
  const [pacientes, setPacientes] = useState([])
    return (
    <div className="flex items-center justify-evenly">
      <TarjetaForm
         pacientes={pacientes}
         setPacientes={setPacientes}
      />
      <RespuestasCitas
         pacientes={pacientes}
      />      
    </div>
    )
}
 export default Home