import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../imagenes/logo.png'

const Navbar = () => {

    // States & Variables

    // Functions

    // JSX

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border border-dark">
            <Link to="/" className="navbar-brand">
                <img src={logo} width="200px" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link" to="/abm-usuarios" activeClassName="active"> ABM usuarios </NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link" to="/abm-formularios" activeClassName="active"> ABM formularios </NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link" to="/perfil" activeClassName="active"> Perfil </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;