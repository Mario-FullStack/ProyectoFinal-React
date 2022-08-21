import React,{useState} from "react";

export default function CitaCard({/* setEditar, */nombre,correo,telefono,dia,hora,sintoma/* ,setNombre,setCorreo,setTelefono,setDia,setHora,setSintoma */}) {
    const [mostrar,setMostrar] = useState(true);
    
    /* const extraerDatos = (objeto)=>{
        setNombre(objeto.nombre);
        setCorreo(objeto.correo);
        setTelefono(objeto.telefono);
        setDia(objeto.dia);
        setHora(objeto.hora);
        setSintoma(objeto.sintoma);
        setEditar(true);

    } */
   
    const borrarCard = e => {
        setMostrar(current => !current);
    };

   

    return (
        <div style={{display:mostrar ? 'block' : 'none'}} className="card bg-white border-blue-500 shadow-md appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight" >
            <span className="font-bold">Nombre:</span> 
            <p>{nombre}</p>
            <span className="font-bold">Correo:</span> 
            <p>{correo}</p>
            <span className="font-bold">Teléfono:</span> 
            <p>{telefono}</p>
            <span className="font-bold">Día:</span> 
            <p>{dia}</p>
            <span className="font-bold">Hora:</span> 
            <p>{hora}</p>
            <span className="font-bold">Síntomas:</span> 
            <p>{sintoma}</p>
            <div className="mt-3 flex justify-end">
               
                <button className="mr-3"/* onClick={extraerDatos} */>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hover:stroke-green-700 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                </button>

                <button onClick={borrarCard}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hover:stroke-red-700 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="#525252" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                </button>
            </div>
        </div>
    )
}