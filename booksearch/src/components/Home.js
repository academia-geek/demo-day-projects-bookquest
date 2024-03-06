import React from 'react'
import Footer from './Extra/Footer'
import Nav from './Extra/Nav'
import Slider from './Extra/Slider'
import '../Styles/Home.css'
export default function Home() {
    return (
        <div>
            <Nav />
            {/*contenedor del cuerpo del home */}
            <div style={{ width: '100%', minHeigh: '100px' }}>
                {/*contenedor imagen de la negrita */}
                <div className='imgNegrita' style={{ width: '100%', minHeight: '600px', position: 'relative' }}>
                    <div style={{ position: 'absolute', width: '100%', top: '45px', left: '50px' }}>
                        <h1 className='contText1'>
                            Descubre, <span className="resaltado">encuentra</span> <br></br> y disfruta de tu <br></br> próximo libro <span className="resaltado">físico</span> <br></br> con facilidad <span className='resaltado'>aquí</span>
                        </h1>
                        <p className='contText2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <button className='btnB' onClick={() => alert("Sera una Ventana Nodal se Search")}>
                            ¡Busca ahora!
                        </button>
                    </div>
                </div>
                <div className='SlideH'>
                    <h1 className='titleSlide'>TE  PUEDEN  GUSTAR</h1>
                    <p className='pSlide'>Selecciona cual te  gusta mas.</p>
                    <div>
                        <Slider />
                    </div>
                </div>
                <div className='contInfoLanding'>
                    <div className='contImgNosotros'>
                        <div className='infoN'>
                            <img className='imgN' src='https://res.cloudinary.com/dtmapxnao/image/upload/v1709755698/Open-Day/241972221_272047854753886_8850634181354973882_n_s3ybqq.jpg'/>
                            <h2 className='nameN' style={{textAlign: "start"}}>Jose<br></br>Castillo</h2>
                        </div>
                        <div className='infoN'>
                            <h2 className='nameN' style={{textAlign: "end"}}>Sebastian <br></br>Perez</h2>
                            <img className='imgN' src='https://res.cloudinary.com/dtmapxnao/image/upload/v1709755701/Open-Day/287129861_5214598658634454_5380403816573380642_n_r4alnv.jpg'/>
                        </div>
                        <div className='infoN'>
                            <img className='imgN' src='https://res.cloudinary.com/dtmapxnao/image/upload/v1709756011/Open-Day/171051779_4499627910051526_9219517060017258154_n_z7jee5.jpg'/>
                            <h2 className='nameN' style={{textAlign: "start"}}>Camilo <br></br>Mendoza</h2>
                        </div>
                    </div>
                    <div>
                        <div className='Q'>
                            <div className='QS'>
                                <h1 className='PQS'>¿Quienes somos?</h1>
                                <p className='RQS'>En <span className="resaltado2">Book | Quest</span>, estamos comprometidos con la misión de hacer que la lectura sea más
                                 accesible para todos. Nuestro equipo está formado por apasionados lectores y profesionales de la tecnología
                                  que creen en el poder transformador de los libros físicos. Nos dedicamos a conectar a los lectores con
                                   las bibliotecas y puntos de venta, proporcionando una plataforma intuitiva y eficiente para descubrir
                                    y acceder a una amplia gama de libros. Creemos en el valor de la lectura enriquecedora y estamos
                                     comprometidos a facilitar el acceso a la literatura y el conocimiento en todas partes."</p>
                            </div>
                            <img style={{padding:"20px"}} src='https://res.cloudinary.com/dtmapxnao/image/upload/v1709759716/Open-Day/libritos_bodyqj.png'/>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
