import React, { Fragment } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../imagenes/logo.png'
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    // States & Variables
    const location = useLocation();

    // Functions


    // JSX

    return (
        <Fragment>
            {location.pathname === '/login' || location.pathname === '/benchmarking' || location.pathname.includes('/form') 
                || location.pathname === '/'
                ?
                null
                :
                <nav className="navbar navbar-expand-lg navbar-light bg-white border border-dark">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt='Observatorio'/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link" to="/abm-usuarios" activeClassName="active"> Usuarios </NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link" to="/abm-formularios" activeClassName="active"> Formularios </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            }
        </Fragment>
    );
}

export default Navbar;