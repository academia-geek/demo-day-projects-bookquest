import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Styles_Importantes/StylesCrudBookBiblioteca.css';

export default function CrudBookBilbiotecas() {
    const [inputValue, setInputValue] = useState('');
    const [booksApi, setBooksApi] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState({
        id: null,
        titulo: '',
        autor: '',
        genero: '',
        año_publicacion: '',
        isbn: '',
        disponibilidad: false,
        cantidad: 0,
        imagen: '',
        sinopsis: ''
    });

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const fetchBooks = async () => {
        try {
            const response = await axios.get(inputValue);
            setBooksApi(response.data);
        } catch (error) {
            console.error("Error al obtener los libros:", error);
        }
    };

    const deleteBook = async (id) => {
        console.log("Id a eliminar:", id);
        try {
            await axios.delete(`${inputValue}/${id}`);
            fetchBooks();
            alert("Libro eliminado correctamente");
        } catch (error) {
            console.error("Error al eliminar el libro:", error);
        }
    };

    useEffect(() => {
        if (inputValue) {
            fetchBooks();
        }
    }, [inputValue]);

    const openModal = (book) => {
        setSelectedBook(book);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedBook({
            id: null,
            titulo: '',
            autor: '',
            genero: '',
            año_publicacion: '',
            isbn: '',
            disponibilidad: false,
            cantidad: 0,
            imagen: '',
            sinopsis: ''
        });
        setModalOpen(false);
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setSelectedBook(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const saveChanges = async () => {
        try {
            await axios.put(`${inputValue}/${selectedBook.id}`, selectedBook);
            fetchBooks();
            closeModal();
            alert("Cambios guardados correctamente");
        } catch (error) {
            console.error("Error al guardar los cambios:", error);
        }
    };

    return (
        <div>
            <h1 className='Title-CrudBookBiblioteca'>Libros Actuales en la Base Ingresadas</h1>
            <hr />
            <label className='LabelInput_CrudBook'>Ingrese la API de su base de Datos:</label>
            <div className='ContenedorInputBook_Crud'>
                <input
                    className='InputAPI'
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Ingresa la URL de su Base de Datos."
                />
            </div>

            <p className='ValorIngresadoBookCRUD'>El valor ingresado es: {inputValue}</p>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Autor Libro</th>
                            <th>Año Publicacion</th>
                            <th>Disponibilidad</th>
                            <th>Género</th>
                            <th>Isbn</th>
                            <th>Sipnosis</th>
                            <th>Título</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {booksApi.map((book, index) => (
                            <tr key={index}>
                                <th>
                                    <label>
                                        <button style={{ color: "red" }} onClick={() => deleteBook(book.id)}>Eliminar</button>
                                        <button style={{ color: "red" }} onClick={() => openModal(book)}>Editar</button>
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={book.imagen} alt='Imagen Libro' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{book.autor}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{book.año_publicacion}</td>
                                <td>{book.disponibilidad ? "Disponible" : "No disponible"}</td>
                                <td>{book.genero}</td>
                                <td>{book.isbn}</td>
                                <td>{book.sinopsis}</td>
                                <td>{book.titulo}</td>
                                <td>{book.cantidad}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Modal Editar */}
            {modalOpen && (
                <div id="my_modal_4" className="modal" open>
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">¡Hola Administrador!</h3>
                        <hr />
                        <p className="py-4">Recuerda tener cuidado con los cambios que haces.</p>
                        <label className='LabelNodal'>Título</label>
                        <label>Titulo del Libro</label>
                        <input type="text" className='InputNODAL' name="titulo" value={selectedBook.titulo} onChange={handleInputChange} />
                        <label>Autor del Libro</label>
                        <input type="text" className='InputNODAL' name="autor" value={selectedBook.autor} onChange={handleInputChange} />
                        <label>Género</label>
                        <input type="text" className='InputNODAL' name="genero" value={selectedBook.genero} onChange={handleInputChange} />
                        <label>Año de Publicación</label>
                        <input type="number" className='InputNODAL' name="año_publicacion" value={selectedBook.año_publicacion} onChange={handleInputChange} />
                        <label>ISBN</label>
                        <input type="text" className='InputNODAL' name="isbn" value={selectedBook.isbn} onChange={handleInputChange} />
                        <label>Disponibilidad</label>
                        <input type="checkbox" className='InputNODAL' name="disponibilidad" checked={selectedBook.disponibilidad} onChange={handleInputChange} />
                        <label>Cantidad</label>
                        <input type="number" className='InputNODAL' name="cantidad" value={selectedBook.cantidad} onChange={handleInputChange} />
                        <label>Imagen</label>
                        <input type="text" className='InputNODAL' name="imagen" value={selectedBook.imagen} onChange={handleInputChange} />
                        <label>Sinopsis</label>
                        <textarea className='InputNODAL' name="sinopsis" value={selectedBook.sinopsis} onChange={handleInputChange} />
                        <div className="modal-action">
                            <button className="btn btn-error" onClick={closeModal}>Cerrar</button>
                            <button className="btn btn-warning" onClick={saveChanges}>Guardar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
