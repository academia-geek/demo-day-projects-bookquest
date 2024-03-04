import React from 'react'

export default function Nav() {
    return (
        <div>
            <div className="navbar bg-base-100" style={{ backgroundColor: "rgb(72, 66, 69, 0.52)" , color: "white" }}>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Book | Quest</a>
                </div>
                <ol style={{ marginRight: "50px", gap: "60px", cursor: "pointer" , fontweight:"bold" }}>
                    <li>Nav 1</li>
                    <li>Nav 2</li>
                    <li>Nav 3</li>
                    <li>Nav 4</li>
                    <li>Nav 5</li>
                </ol>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
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
