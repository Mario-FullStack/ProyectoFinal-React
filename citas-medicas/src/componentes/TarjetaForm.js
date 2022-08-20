import React, {useState} from "react";
/* import ContextInform from "./ContextInform";
 */import Input from './Input';


function TarjetaForm({pacientes,setPacientes}) {
    
    const [nombre, setNombre] = useState('')
    
      const cambiarNombre = (e) => {
        setNombre(e.target.value)
        }
      

      function enviarDatos(e) {
        
        e.preventDefault();
        const paciente = {
            nombre
        }
        setPacientes([...pacientes,paciente])

        setNombre("")
    }

    return (
        <div className="flex flex-wrap justify-center mt-20">
            <div className="w-full max-w-sm">
                <div className="w-full p-7 bg-blue-700 rounded-t-lg">
                    <p className="text-xl text-white font-bold">Llene el Formulario</p>
                </div>
                {/* FORM */}
                <form onSubmit={enviarDatos} className="shadow-md bg-blue-100 text-left rounded px-8 pt-6 pb-8 mb-4">
                    <Input
                        /* estado={nombre}
                        cambiarEstado={setNombre} */
                        tipo="text"
                        label="Nombre"
                        placeholder="Nombre completo"
                        vinculo="nombre"
                        funcion={cambiarNombre}
                        valor={nombre} 
                    />
                    <div className="flex items-center justify-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:shadow-outline">
                            Enviar Solicitud
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TarjetaForm;