import React, { Component } from 'react';
import './boton.css'
import './barra.css'
import logo from '../../imagenes/logo.png'
import { Link } from 'react-router-dom';

class Barra extends Component {
    render() {
        return (
            <nav className="barra navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/login" className='navbar-brand'>
                    <img src={logo}  alt='Observatorio'/>
                </Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a >Formularios disponibles: {this.props.cantFormularios}<span className="sr-only">(current)</span></a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    </svg>
                    <div className="col"> 
                    
                        <select className="custom-select mr-sm-2" id="sectores">
                            <option selected>Seleccionar sector...</option>
                            <option value="1">Elaboración de productos alimenticios y/o bebidas</option>
                            <option value="2">Fabricación de productos textiles</option>
                            <option value="3">Producción de madera y fabricación de productos de madera, corcho y paja, excepto muebles</option>
                            <option value="4">Fabricación de papel y de productos de papel</option>
                            <option value="5">Fabricación de sustancias y de productos químicos</option>
                            <option value="6">Fabricación de productos de caucho y de plástico</option>
                            <option value="7">Fabricación de otros productos minerales no metálicos</option>
                            <option value="8">Fabricación de metales comunes</option>
                            <option value="9">Fabricación de productos de informática, de electrónica y de óptica</option>
                            <option value="10">Fabricación de maquinaria y equipo n.c.p.</option>
                            <option value="11">Fabricación de vehículos automotores, remolques y semirremolques</option>
                            <option value="12">Fabricación de muebles</option>
                            <option value="13">Elaboración de productos de tabaco</option>


                        </select>
                    </div>
                    
                        <button className="boton btn my-2 my-sm-0" type="submit">LOGIN EMPLEADOS</button>
                    </form>
                </div>
            </nav>
        )
    }
}
export default Barra;