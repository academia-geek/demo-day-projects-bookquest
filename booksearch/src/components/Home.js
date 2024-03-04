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
                    <div style={{position: 'absolute' , width: '100%' , top: '50px', left: '50px'}}>
                        <h1 className='contText1'>
                            Descubre, <span className="resaltado">encuentra</span> y disfruta de tu próximo libro <span className="resaltado">físico</span> con facilidad <span className='resaltado'>aquí</span>
                        </h1>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
