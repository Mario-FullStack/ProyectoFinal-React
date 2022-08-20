import React from "react";
import CitaCard from "./CitaCard";
/* import CitasContext from "./CitasContext";
import TarjetaForm from "./TarjetaForm"; */


function RespuestasCitas({pacientes}) {
    /* const {nombre} = CitasContext(); */

    return (
        <div className="flex flex-wrap justify-center mt-20">
            <div className="w-full max-w-sm">
                <div className="w-full p-7 bg-blue-700 rounded-t-lg">
                    <p className="text-xl text-white font-bold">Agenda de Citas</p>
                </div>
                <aside className="shadow-md bg-blue-100 text-left rounded px-8 pt-6 pb-8 mb-4">
                    <div className="w-[206.5px]">
                        {
                            pacientes.map((paciente)=>{
                                return <CitaCard
                                    nombre={paciente.nombre}
                                />
                            })
                        }
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default RespuestasCitas;
                
                    