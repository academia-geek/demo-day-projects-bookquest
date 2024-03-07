import React from 'react';
import { useDispatch } from 'react-redux';
import { CreateBook } from '../../redux/Actions/AgregarLibro';

export default function CrudAdminBook() {
  const dispatch = useDispatch(); 

  const addBook = async () => {
    try {
      console.log("Envio los Datos.")
      const payload = {
        NombreAutor: "Sebastian Perez2",
        NombreLibro: "100 años de Soledad2",
        Genero: "Dramatica",
        AñoPublicacion: "1999/25/215",
        Existencias: 1,
        ImagenPortada: "pruebaImage.jpg2",
        Sipnosis: "Esta es la primera prueba del Payload de los Libros, Si esto me da me puedo ir para la casa...2."
      };

      // Llamada a dispatch con el payload
      await dispatch(CreateBook(payload));
    } catch (error) {
      console.log("Error creating");
    }
  }
  
  return (
    <div>
      <h1>
        <button className="btn btn-warning" onClick={() => addBook()}>Iniciar</button>
      </h1>
    </div>
  );
}
