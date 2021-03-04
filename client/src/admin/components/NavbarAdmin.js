import React, {useState} from 'react';
import IconOff from "../assets/IconOff";

export const NavbarAdmin = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    const toggleShow = () => {
        setShowSidebar(!showSidebar);
        document.getElementById('sidebarMenu').classList.toggle('show');
    }

    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Mauritius Admin</a>
            <button onClick={toggleShow} className="navbar-toggler position-absolute d-md-none collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <ul className="navbar-nav ">
                <li className="nav-item text-nowrap">
                    <a className="nav-link" ><IconOff/></a>
                </li>
            </ul>
        </header>
    )
}