import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function CrudBookBilbiotecas() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const fetchBook = async () => {
        try {
            const responseBook = await axios.get(inputValue);
            console.log(responseBook.data);
        } catch(error) {
            console.error("Error al obtener el libro:", error);
        }
    };
    

    useEffect(() => {
        if (inputValue) {
            fetchBook();
        }
    }, [inputValue]);
    
    return (
        <div>
            <label>Ingrese la API de su base de Datos:</label>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Ingresa la URL de la API"
            />
            <p>El valor ingresado es: {inputValue}</p>
        </div>
    );
}
