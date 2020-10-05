import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useLocation } from 'react-router-dom';
import { logo } from '../../imagenes/logo.png'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    // States & Variables
    const location = useLocation();
    console.log(location.pathname);

    return (
        <Fragment>
            {location.pathname === '/login' || location.pathname === '/benchmarking' || location.pathname.includes('/form')
                || location.pathname === '/'
                ?
                null
                :
                <IconContext.Provider value={{ color: '#fff' }}>
                    <div className='navbar'>
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                        <Link to="/" className='navbar-brand'>
                        <img src={logo} width="200px"  alt='Observatorio'/>
                        </Link>
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
                        </ul>
                    </nav>
                </IconContext.Provider>
            }
        </Fragment>
    );
}

export default Navbar;