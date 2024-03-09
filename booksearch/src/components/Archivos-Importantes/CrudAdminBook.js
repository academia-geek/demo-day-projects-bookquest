import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreateBook } from '../../redux/Actions/AgregarLibro';


export default function CrudAdminBook() {
  const dispatch = useDispatch();

  const [bookData, setBookData] = useState({
    NombreAutor: '',
    NombreLibro: '',
    Genero: '',
    AñoPublicacion: '',
    Existencias: 0,
    ImagenPortada: '',
    Sipnosis: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const addBook = async () => {
    try {
      console.log("Enviando los Datos...");
      await dispatch(CreateBook(bookData));
    } catch (error) {
      console.log("Error al crear:", error);
    }
  }
  

  return (
    <div>
      <h1>Crear Nuevo Libro</h1>
      <form>
        <label>Autor:</label>
        <input className="input-field" type="text" name="NombreAutor" value={bookData.NombreAutor} onChange={handleChange} />
        <br />
        <label>Nombre del Libro:</label>
        <input className="input-field" type="text" name="NombreLibro" value={bookData.NombreLibro} onChange={handleChange} />
        <br />
        <label>Género:</label>
        <input className="input-field" type="text" name="Genero" value={bookData.Genero} onChange={handleChange} />
        <br />
        <label>Año de Publicación:</label>
        <input className="input-field" type="text" name="AñoPublicacion" value={bookData.AñoPublicacion} onChange={handleChange} />
        <br />
        <label>Existencias:</label>
        <input className="input-field" type="number" name="Existencias" value={bookData.Existencias} onChange={handleChange} />
        <br />
        <label>Imagen de Portada:</label>
        <input className="input-field" type="text" name="ImagenPortada" value={bookData.ImagenPortada} onChange={handleChange} />
        <br />
        <label>Sinopsis:</label>
        <textarea className="textarea-field" name="Sipnosis" value={bookData.Sipnosis} onChange={handleChange} />
        <br />
        <button type="button" className="btn btn-warning" onClick={addBook}>Guardar Libro</button>
      </form>
    </div>
  );
}
