import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Styles_Importantes/StylesCrudBookBiblioteca.css';

export default function CrudBookBilbiotecas() {
    const [inputValue, setInputValue] = useState('');
    const [BooksApi, SetBooksApi] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [BookNodal, SetBookNodal] = useState([]);


    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const fetchBook = async () => {
        try {
            const responseBook = await axios.get(inputValue);
            SetBooksApi(responseBook.data);
        } catch (error) {
            console.error("Error al obtener el libro:", error);
        }
    };

    const VentanaNodal = async (Id) => {
        console.log("Entro al Nodal...");
        try {
            const responseNodal = await axios.get(`${inputValue}/${Id}`);
            SetBookNodal(responseNodal.data);
        } catch (error) {
            console.error("Error al hacer la solicitud:", error);
        }
    };
    

    useEffect(() => {
        if (inputValue) {
            fetchBook();
        }
    }, [inputValue]);

    function openModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }
    // console.log(BooksApi);
    return (
        <div>
            <a href='#' className="HelpCrudBookBiblioteca">¿Necesitas Ayuda?<button className="btn btn-primary" onClick={openModal}>Editar Books</button></a>
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
                /></div>

            <p className='ValorIngresadoBookCRUD'>El valor ingresado es: {inputValue}</p>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Autor Libro</th>
                            <th>Año Publicacion</th>
                            <th>Disponibilidad</th>
                            <th>Genero</th>
                            <th>Isbn</th>
                            <th>Sipnosis</th>
                            <th>Titulo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {BooksApi?.map((Books, KeyBooks) => (
                            <tr key={KeyBooks}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" onClick={() => VentanaNodal(Books.id)} />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={Books.Imagen} alt='Imagen Libro' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{Books.autor}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{Books.año_publicacion}</td>
                                <td>{Books.disponibilidad ? "Disponible" : "No disponible"}</td>
                                <td>{Books.genero}</td>
                                <td>{Books.isbn}</td>
                                <td>{Books.sinopsis}</td>
                                <td>{Books.titulo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Modal Editar */}
            {modalOpen && (
                <dialog id="my_modal_4" className="modal" open>
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">¡Hola Administrador!</h3>
                        <hr></hr>
                        {
                            BookNodal?.map((BooksNodal , KeyNodal)=> {
                                
                            })
                        }
                        <p className="py-4">Recuerda tener cuidado con los cambios que haces.</p>
                        <label className='LabelNodal'>Título</label>
                        <input type="text" className='InputNODAL' ></input>
                        <label className='LabelNodal'>Autor</label>
                        <input type="text" className='InputNODAL' ></input>
                        <label className='LabelNodal'>Género</label>
                        <input type="text" className='InputNODAL' ></input>
                        <label className='LabelNodal'>Año de Publicación</label>
                        <input type="text" className='InputNODAL' ></input>
                        <label className='LabelNodal'>ISBN</label>
                        <input type="text" className='InputNODAL' ></input>
                        <label className='LabelNodal'>Disponibilidad</label>
                        <input type="text" className='InputNODAL' ></input>
                        <label className='LabelNodal'>Imagen</label>
                        <input type="text" className='InputNODAL' ></input>
                        <label className='LabelNodal'>Sipnossiisi</label>
                        <input type="text" className='InputNODAL' ></input>
                        <div className="modal-action">
                            <button className="btn btn-error" onClick={closeModal}>Cerrar</button>
                            <button className="btn btn-warning">Guardar</button>
                        </div>
                    </div>
                </dialog>
            )}

        </div>
    );
}
