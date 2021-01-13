import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/navbar.css';

export const Navbar = () => {
    return (
        <nav className="Nav row py-2">
            <div className="NavBloc col-6">
                <Link to="/"> Mauritius </Link>
            </div>
            <div className="NavBloc col-6">
                <Link to="/" className="LinkStyle">
                    Accueil
                </Link>
                <Link to="/activities" className="LinkStyle">
                    Que faire ?
                </Link>
                <Link to="/news" className="LinkStyle">
                    Actualités
                </Link>
            </div>
        </nav>
    )
}
