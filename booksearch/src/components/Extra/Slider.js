import React from 'react';
import './Slider.css';

export default function Slider() {
    return (
        <section className="container">
            <div className='slider-wrapper'>
                <div className='slider'>
                    {/* Logicamente se va a hacer un Mapeo  de las imagenes de los Libros
                        Estaremos con esta para las pruebas y Etc
                    */}
                    <img id='slider-1' className='ImgSLIDER' src='https://res.cloudinary.com/dfqxaodn0/image/upload/v1709610628/BookQueest/Portada%20Libros/images_mvuohs.jpg' alt=''></img>
                    <img id="slider-2" className='ImgSLIDER' src='https://res.cloudinary.com/dfqxaodn0/image/upload/v1709610626/BookQueest/Portada%20Libros/d2db2cbe3d4637169937431046db4c61_mufpz5.jpg' alt=''></img>
                    <img id='slider-3' className='ImgSLIDER' src='https://res.cloudinary.com/dfqxaodn0/image/upload/v1709610619/BookQueest/Portada%20Libros/0cedcc243feee39342cdfe9df409e7eb_cdfmuh.jpg' alt=''></img>
                    <img id='slider-4' className='ImgSLIDER' src='https://res.cloudinary.com/dfqxaodn0/image/upload/v1709610601/BookQueest/Portada%20Libros/images_diujij.jpg' alt=''></img>
                    <img id='slider-5' className='ImgSLIDER' src='https://res.cloudinary.com/dfqxaodn0/image/upload/v1709610581/BookQueest/Portada%20Libros/1623078210-la-naranja-mecanica-anthony-burgess-201505261226_dae1sk.jpg' alt=''></img>
                    <img id='slider-6' className='ImgSLIDER' src='https://res.cloudinary.com/dfqxaodn0/image/upload/v1709610568/BookQueest/Portada%20Libros/fcb598893ba4a5fd0dee8b0cc34f055d_gholg4.jpg' alt=''></img>
                    <img id='slider-7' className='ImgSLIDER' src='https://res.cloudinary.com/dfqxaodn0/image/upload/v1709610526/BookQueest/Portada%20Libros/images_pcv1eg.jpg' alt=''></img>
                    <img id='slider-8' className='ImgSLIDER' src='https://res.cloudinary.com/dfqxaodn0/image/upload/v1709610498/BookQueest/Portada%20Libros/portadas-libros-big-2019101610_zkftpm.jpg' alt=''></img>
                    <img id='slider-9' className='ImgSLIDER' src='https://res.cloudinary.com/dfqxaodn0/image/upload/v1709610498/BookQueest/Portada%20Libros/portadas-libros-big-2019101610_zkftpm.jpg' alt=''></img>
                </div>
                <div className='slider-nav'>
                    <a href="#slider-1" className='slider-button'></a>
                    <a href="#slider-5" className='slider-button'></a>
                    <a href="#slider-9" className='slider-button'></a>
                </div>
            </div>
        </section>
    );
}
