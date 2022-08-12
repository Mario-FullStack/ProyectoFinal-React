import React from "react";

function TarjetaForm() {
    return (
        <div className="flex flex-wrap justify-center mt-20">
            <div className="w-full max-w-sm">
                <div className="w-full p-7 bg-blue-700 rounded-t-lg">
                    <p className="text-xl text-white font-bold">Llene el Formulario</p>
                </div>
                <form className="shadow-md bg-blue-100 text-left rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight hover:border-gray-400 transition focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:shadow-outline">
                            Enviar Solicitud
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TarjetaForm;