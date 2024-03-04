import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const navigate = useNavigate();

    const LoginForm = () => {
        navigate('/Login');
    }
    return (
        <div>
            <div className="navbar bg-base-100" style={{ backgroundColor: "rgb(72, 66, 69, 0.52)", color: "white" }}>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Book | Quest</a>
                </div>
                <ol style={{ marginRight: "50px", gap: "60px", cursor: "pointer", fontweight: "bold" }}>
                    <li style={{borderBottom:"3px solid black" , BorderRadius: "50px"}}>Inicio</li>
                    <li>Eventos</li>
                    <li>Estanteria</li>
                    <li>Nuevos</li>
                    <li>Colaboladores</li>
                </ol>
                <div className="flex-none gap-2">
                    <button onClick={() => LoginForm()} style={{ background: "white", color: "black", padding: "10px", borderRadius: "12px", width:"100%" }}>Login/Register</button>
                    <div className="dropdown dropdown-end"> 
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
