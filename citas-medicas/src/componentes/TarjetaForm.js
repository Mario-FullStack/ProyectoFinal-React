import React, {useState} from "react";
 import Input from './Input';


function TarjetaForm({pacientes,setPacientes}) {
    
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [dia, setDia] = useState('')
    const [hora, setHora] = useState('')
    const [sintoma, setSintoma] = useState('')
    
      const cambiarNombre = (e) => {
        setNombre(e.target.value)
        }
      const cambiarCorreo = (e) => {
        setCorreo(e.target.value)
        }
      const cambiarTelefono = (e) => {
        setTelefono(e.target.value)
        }
      const cambiarDia = (e) => {
        setDia(e.target.value)
        }
      const cambiarHora = (e) => {
        setHora(e.target.value)
        }
      const cambiarSintoma = (e) => {
        setSintoma(e.target.value)
        }
      

      function enviarDatos(e) {
        
        e.preventDefault();
        const paciente = {
            nombre,
            correo,
            telefono,
            dia,
            hora,
            sintoma
        }
        setPacientes([...pacientes,paciente])

        setNombre("")
        setCorreo("")
        setTelefono("")
        setDia("")
        setHora("")
        setSintoma("")
    }

    /* const [editar,setEditar] = useState(false);

   

    const editarCard = (e) => {
        e.preventDefault()
        const actualizado = pacientes.map(paciente => paciente.nombre === nombre ? {nombre,correo,telefono,dia,hora,sintoma} : paciente)
        setPacientes(actualizado);
        setEditar(false);
        setNombre("");
        setCorreo("");
        setTelefono("");
        setDia("");
        setHora("");
        setSintoma("");
    } */

    return (
        <div className="flex flex-wrap justify-center mt-20">
            <div className="w-full max-w-sm">
                <div className="w-full p-7 bg-blue-700 rounded-t-lg">
                    <p className="text-xl text-white font-bold">Llene el Formulario</p>
                </div>

                <form className="shadow-md bg-blue-100 text-left rounded px-8 pt-6 pb-8 mb-4">
                    <Input
                        tipo="text"
                        label="Nombre"
                        placeholder="Nombre completo"
                        vinculo="nombre"
                        funcion={cambiarNombre}
                        valor={nombre} 
                    />
                    <Input
                        tipo="email"
                        label="Correo Electronico"
                        placeholder="@email"
                        vinculo="correo"
                        funcion={cambiarCorreo}
                        valor={correo} 
                    />
                    <Input
                        tipo="tel"
                        label="Número Telefónico"
                        placeholder="5555-5555"
                        vinculo="telefono"
                        funcion={cambiarTelefono}
                        valor={telefono} 
                    />
                    <Input
                        tipo="text"
                        label="Día de la Semana"
                        placeholder="Lunes - Viernes"
                        vinculo="dia"
                        funcion={cambiarDia}
                        valor={dia} 
                    />
                    <Input
                        tipo="text"
                        label="Hora de la Cita"
                        placeholder="06:00 - 18:00"
                        vinculo="hora"
                        funcion={cambiarHora}
                        valor={hora} 
                    />
                    <Input
                        tipo="text"
                        label="Especifique los Síntomas"
                        placeholder="fiebre..."
                        vinculo="sintoma"
                        funcion={cambiarSintoma}
                        valor={sintoma} 
                    />
                    <div className="flex items-center justify-center">
                        {/* {
                            editar ? (
                                <button onClick={editarCard} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:shadow-outline">
                                    Actualizar Solicitud
                                </button>
                            ) : */}
                            <button  onClick={enviarDatos} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:shadow-outline">
                                Enviar Solicitud
                            </button>
                       {/*  } */}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TarjetaForm;