import React from 'react'
import Footer from './Extra/Footer'
import Nav from './Extra/Nav'

export default function Home() {
    return (
        <div>
            <Nav />
            <div>
            <div style={{background:"red" , borderRadius: "20px"}} className="artboard artboard-horizontal phone-1">568×320</div>        
                </div>
            <Footer />
        </div>
    )
}
