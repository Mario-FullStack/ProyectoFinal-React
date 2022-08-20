import React from "react";

export default function CitaCard({nombre}) {
    return (
        <div className="bg-white border-blue-500 shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight hover:border-gray-400 transition focus:outline-none focus:shadow-outline" >
            <p>Nombre: {nombre}</p>
        </div>
    )
}