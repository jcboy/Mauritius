import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block  sidebar collapse">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/admin/contentlist" className="nav-link" >Liste du contenu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/admin/addcontent" className="nav-link" >Ajouter contenu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/admin/filters" className="nav-link" >Gestion des filtres</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/admin/emaillist" className="nav-link" >Messagerie</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/admin/password" className="nav-link" >Mot de passe</NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
    )
}