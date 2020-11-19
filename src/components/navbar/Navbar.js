import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useLocation } from 'react-router-dom';
import logo from '../../imagenes/logo.png'
import * as IoIcons from "react-icons/io";
import { SignOut } from '../../pages/auth/auth.service';
import { Grid} from '@material-ui/core';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    // States & Variables
    const location = useLocation();

    const [user, setUser] = useState({user:"User"});

    // Functions


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            console.log('Trayendo datos del usuario...');
            fetchUserData();
        }
    });

    const signOut = () => {
        console.log('Hay que cerrar la sesión y expulsar');
        SignOut();
        window.location.reload(false);
    }

    const fetchUserData = async () => {
        const token = localStorage.getItem('token');
        const mailUser = localStorage.getItem('loggedUser');
        const userRequest = {
            email: mailUser
        }
        //invoca la api para obtener la información del usuario (roles y permisos)
        const res = await fetch('https://interactivas-backend.herokuapp.com/api/users/me', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
            body: JSON.stringify(userRequest)
        });
        const data = await res.json();
        setUser(data.user);
        console.log(data.user)
    }


    return (
        <Fragment>
            {location.pathname === '/login' || location.pathname === '/benchmarking' || location.pathname.includes('/form')
                || location.pathname === '/'
                ?
                null
                :
                <IconContext.Provider value={{ color: '#fff' }}>
                    <div className="pos-f-t navbarMobile">
                        <div className="collapse" id="navbarToggleExternalContent">
                            <div className="bg-green p-4">
                                <h5 style={{color:"#279daa"}}>¡Buenos días,  {user.name}!</h5>
                                {
                                    user.role === 'ADMIN' ?
                                        SidebarData.map((item, index) => {
                                            return (
                                                <li className='nav-text' key={index}>
                                                    <Link to={item.path}>
                                                        {item.icon}
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            );
                                        }) :
                                        SidebarData.filter((item) => item.role.includes('USER'))
                                            .map((item, index) => {
                                                return (
                                                    <li className='nav-text' key={index}>
                                                        <Link to={item.path}>
                                                            {item.icon}
                                                            <span>{item.title}</span>
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                }
                                <li className='nav-text'>
                                    <Link to="nothing" onClick={signOut}>
                                        <IoIcons.IoIosPaper />
                                        <span>Cerrar sesión</span>
                                    </Link>
                                </li>
                            </div>
                        </div>
                        <nav className="navbar navbar-dark bg-dark">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon m-0"></span>
                            </button>
                        </nav>
                    </div>
                    <div className="navbar navbarDesktop">
                        <Grid container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <Grid item>
                                <Link to='#' className='menu-bars'>
                                    <FaIcons.FaBars onClick={showSidebar} />
                                </Link>
                            </Grid>
                            <div className="d-flex align-items-center">
                                <Grid item className="navbar-brand-sidebar mr-2">
                                    <h5 style={{color:"#279daa"}}>¡Buenos días,  {user.name}</h5>
                                    <h5 style={{color:"#279daa"}}> tu rol es: {user.role}!</h5> 
                                </Grid>
                                <Grid item className="navbar-brand-sidebar ml-2">
                                    <img src={logo} alt='Observatorio' />
                                </Grid>
                            </div>
                        </Grid>
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            {
                                user.role === 'ADMIN' ?
                                    SidebarData.map((item, index) => {
                                        return (
                                            <li key={index} className={item.cName}>
                                                <Link to={item.path}>
                                                    {item.icon}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        );
                                    }) :
                                    SidebarData.filter((item) => item.role.includes('USER'))
                                        .map((item, index) => {
                                            return (
                                                <li key={index} className={item.cName}>
                                                    <Link to={item.path}>
                                                        {item.icon}
                                                        <span>{item.title}</span>
                                                    </Link></li>
                                            );
                                        })
                            }
                            <li className='nav-text'>
                                <Link to="nothing" onClick={signOut}>
                                    <IoIcons.IoIosPaper />
                                    <span>Cerrar sesión</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </IconContext.Provider>
            }
        </Fragment>
    );
}

export default Navbar;