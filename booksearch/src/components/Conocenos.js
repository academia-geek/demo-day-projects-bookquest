import React, { useEffect, useState } from 'react'
import Footer from './Extra/Footer'
import Nav from './Extra/Nav'
import Slider from './Extra/Slider'
import '../Styles/Conocenos.css'
import { Navigate, useNavigate } from 'react-router-dom'


export const Conocenos = () => {
    return (
        <div>
            <Nav />
            <div style={{ width: '100%', minHeigh: '100px' }}>
                <div className='contInfoLanding' style={{ width: '100%', minHeight: '600px', position: 'relative', justifyContent: "space-around", padding: "60px" }}>
                    <img style={{ position: "absolute", left: "35%", bottom: "15px" }} src='https://res.cloudinary.com/dtmapxnao/image/upload/v1709759716/Open-Day/lector_hsllte.png' />
                    <div style={{ backgroundColor: "rgb(255,255,255)", padding: "40px", paddingLeft: "60px", paddingRight: "60px", borderRadius: "10px" }}>
                        <h1 className='texTo'>"Descubre un<br></br><span className="resaltado">mundo</span> de<br></br><span className="resaltado">conocimiento</span> en<br></br> tus <span className="resaltado">manos</span>"</h1>
                        <br></br>
                        <p className='texTo2'>Book | Quest: Tu acceso al mundo<br></br>del conocimiento. Bienvenido a<br></br>nuestra comunidad de lectores<br></br>apacionados.<br></br></p>
                        <br></br>
                        <p className='texTo2'>Navega un poco para que conozcas<br></br>de nosotros</p>
                    </div>
                    <img style={{ position: "absolute", top: "10px", right: "20px" }} src='https://res.cloudinary.com/dtmapxnao/image/upload/v1709759716/Open-Day/libritos_bodyqj.png' />
                    <img style={{ height: "510px", borderRadius: "10px", border: "solid", borderColor: "white", borderWidth: "8px" }} src='https://res.cloudinary.com/dtmapxnao/image/upload/v1701179389/samples/cup-on-a-table.jpg' />
                </div>
                <div className='contInfoLanding' style={{ width: '100%', minHeight: '600px', position: 'relative', padding: "60px", backgroundColor: "rgb(72, 66, 69)", flexDirection: "column", gap: "35px" }}>
                    <div style={{ display: "flex", gap: "40px" }}>
                        <div className='contTextoChido'>
                            <p className='texTo2'>En BookFinder, nos dedicamos a preservar y catalogar<br></br>libros disponibles en las bibliotecas cercanas, para ponerlos<br></br>
                                al alcance de todos. Nuestra meta es servir a investigadores,<br></br>académicos y al público en general interesados en una amplia<br></br>variedad de temas y autores.</p>
                        </div>
                        <div className='contTextoChido'>
                            <p className='texTo2'>Nos enorgullece ser el centro de<br></br>conservación de libros disponibles<br></br>en las bibliotecas de nuestra región,<br></br>
                                siendo un recurso valioso para la<br></br>comunidad lectora.</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "40px" }}>
                        <div className='contTextoChido'>
                            <p className='texTo2'>Nuestro patrimonio bibliográfico abarca una<br></br>amplia variedad de temas y autores, Estos<br></br>documentos, están disponibles para consulta<br></br>en nuestra plataforma.</p>
                        </div>
                        <div className='contTextoChido'>
                            <p className='texTo2'>Únete a nosotros en BookFinder y descubre la riqueza<br></br>del patrimonio bibliográfico y documental de nuestra<br></br>comunidad.
                                ¡Explora, investiga y sumérgete en nuestra<br></br>biblioteca virtual!</p>
                        </div>
                    </div>
                    <img style={{ position: "absolute", left: "41%", bottom: "36%", width: "150px" }} src='https://res.cloudinary.com/dtmapxnao/image/upload/v1709759715/Open-Day/LogoBibioteca_uyy7nf.png' />
                </div>
            </div>
            <Footer />
        </div>
    )
}
