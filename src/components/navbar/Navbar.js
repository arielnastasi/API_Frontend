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
import { Grid, Typography } from '@material-ui/core';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    // States & Variables
    const location = useLocation();

    const [user,setUser] = useState({});

    // Functions

    //this
     useEffect( () => {
        const token = localStorage.getItem('token');
        const mailUser = localStorage.getItem('loggedUser');
        fetchData()
        async function fetchData() {
            const userRequest = {
                email: mailUser
            }
        //invoca la api para obtener la información del usuario (roles y permisos)
        const res = await fetch('https://interactivas-backend.herokuapp.com/api/users/me',{
            method: 'POST',
            headers: {
				'Content-Type': 'application/json',
				'token': token
            },
            body: JSON.stringify(userRequest)
        });
        const data = await res.json();
        console.log(data.user);
        setUser(data.user)
    }

    });

    const signOut = () => {
        console.log('Hay que cerrar la sesión y expulsar');
        SignOut();
        window.location.reload(false);
    }



    return (
        <Fragment>
            {location.pathname === '/login' || location.pathname === '/benchmarking' || location.pathname.includes('/form')
                || location.pathname === '/'
                ?
                null
                :
                <IconContext.Provider value={{ color: '#fff' }}>
                    <div className='navbar'>
                        <Grid container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <Link to='#' className='menu-bars'>
                                    <FaIcons.FaBars onClick={showSidebar} />
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={3} >
                                <Typography 
                                    className='typography' 
                                    variant="h6">
                                    <AiIcons.AiOutlineUser />
                                    ¡Hola!  July Bustamante
                                    </Typography>
                            </Grid>
                            <Grid item xs={12}  sm={3} className='navbar-brand-sidebar'>
                                <img src={logo} alt='Observatorio' />
                            </Grid>
                        </Grid>
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
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