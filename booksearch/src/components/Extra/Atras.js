import React from 'react'

export default function Atras() {
    const Volver = function Volver() {
        window.history.back();
    }

    return (
        <div>
            <button type="submit" onClick={Volver}style={{margin: "10px 0px 0px 10px"}}>Atras.</button>
        </div>
    )
}
