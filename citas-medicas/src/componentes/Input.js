import React from "react";

function Input({tipo,label,placeholder,vinculo,funcion,valor}) {
 
    return (
        <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                value={valor} 
                type={tipo} 
                placeholder={placeholder} 
                name={vinculo}
                onChange={funcion}
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight hover:border-gray-400 transition focus:outline-none focus:shadow-outline" 
            />
        </div>
    )
}

export default Input;