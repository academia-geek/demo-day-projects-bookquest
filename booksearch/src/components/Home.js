import React from 'react'
import Footer from './Extra/Footer'
import Nav from './Extra/Nav'
import '../Styles/Home.css'

export default function Home() {
    return (
        <div>
            <Nav />
            {/*contenedor del cuerpo del home */}
            <div style={{width: '100%' , minHeigh: '100px'}}>
                {/*contenedor imagen de la negrita */}
                <div className='imgNegrita' style={{width: '100%' , minHeight: '600px', position: 'relative'}}>
                    <div style={{position: 'absolute' , width: '100%' , top: '45px', left: '50px'}}>
                        <h1 className='contText1'>
                            Descubre, <span className="resaltado">encuentra</span> <br></br> y disfruta de tu <br></br> próximo libro <span className="resaltado">físico</span> <br></br> con facilidad <span className='resaltado'>aquí</span>
                        </h1>
                        <p className='contText2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <button className='btnB'>
                            ¡Busca ahora!
                        </button>
                    </div>
                </div>
                <div className='SlideH'>
                    <h1 className='titleSlide'>TE  PUEDEN  GUSTAR</h1>
                    <p className='pSlide'>Selecciona cual te  gusta mas.</p>
                    <div>
                        
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
