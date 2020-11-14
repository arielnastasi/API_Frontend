import React  from 'react';
import './boton.css'
import './barra.css'
import logo from '../../imagenes/logo.png'
import { Link, useHistory } from 'react-router-dom';
import OrangeButton from '../orangeButton/OrangeButton';
import { Grid } from '@material-ui/core';


// class Barra extends Component {
const Barra = ({cantFormularios}) => {
    const history = useHistory();
    const routeChange = (path) => {
        history.push(path);
    }
        return (<>
            <nav className="barra navbar navbar-expand-lg navbar-light">
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <Grid container spacing={2}>
                <Grid to="/login" className='navbar-brand-sidebar ml-2'>
                    <img src={logo} alt='Observatorio' />
                </Grid>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <Grid>
                  <a >Formularios disponibles: {cantFormularios}<span className="sr-only">(current)</span></a>   
                </Grid>  
                       
                    <form className="form-inline my-2 my-lg-0">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                        </svg>
                        <div className="col">

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
                        </div>
                        <OrangeButton
                            nombreBoton="Login Empleados"
                            onClick={() => routeChange('/login')}
                        />
                    </form>
                </div>
                </Grid>
            </nav>
            </>
        )
}
export default Barra;