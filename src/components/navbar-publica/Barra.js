import React, { Fragment } from 'react';
import './boton.css'
import './barra.css'
import logo from '../../imagenes/logo.png'
import { Link, useHistory } from 'react-router-dom';
import OrangeButton from '../orangeButton/OrangeButton';
import { Grid } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import { IconContext } from 'react-icons';

// class Barra extends Component {
const Barra = ({ cantFormularios }) => {
    const history = useHistory();
    const routeChange = (path) => {
        history.push(path);
    }
    return (<Fragment>
        <IconContext.Provider value={{ color: '#fff' }} />
        <div className="pos-f-t navbarMobile">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-green p-4">
                    <li className='nav-text'>
                        <OrangeButton
                            nombreBoton="Login Empleados"
                            onClick={() => routeChange('/login')}
                        />
                    </li>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon m-0"></span>
                </button>
            </nav>
        </div> 
        <nav className="barra navbar navbarDesktop">
        <Grid container alignContent="space-between" alignItems="center">
            <Grid item ms={3} to="/login" className='navbar-brand-sidebar ml-2'>
                <img src={logo} alt='Observatorio' />
            </Grid>
            <Grid md={2}>
                <a >Formularios disponibles: {cantFormularios}<span className="sr-only">(current)</span></a>
            </Grid >
            <form className="form-inline my-2 my-lg-0">
                <Grid item ms={3}>
                    <SearchOutlined />
                    <select className="custom-select mr-sm-2" id="sectores">
                        <option value="default">Seleccionar sector...</option>
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
                </Grid>
            </form>
            <Grid item ms={3}>
                <OrangeButton
                    nombreBoton="Login Empleados"
                    onClick={() => routeChange('/login')}
                />
            </Grid>
        </Grid>
        </nav>
    </Fragment>
    )
}
export default Barra;