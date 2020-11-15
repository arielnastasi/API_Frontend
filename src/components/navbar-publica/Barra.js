import React, { Fragment } from 'react';
import './boton.css'
import './barra.css'
import logo from '../../imagenes/logo.png'
import { useHistory } from 'react-router-dom';
import OrangeButton from '../orangeButton/OrangeButton';
import { Grid } from '@material-ui/core';
import { IconContext } from 'react-icons';

// class Barra extends Component {
const Barra = ({ cantFormularios }) => {
    const history = useHistory();
    const routeChange = (path) => {
        history.push(path);
        console.log(`cantidad de formularios disponible ${cantFormularios}`)
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
        <nav className="barra navbarDesktop">
            <Grid container justify="flex-start">
                <Grid item xs={6} sm={3} to="/login" className='navbar-brand-sidebar ml-2'>
                <img src={logo} alt='Observatorio' />  
                </Grid>
                <Grid item xs={6} sm={6}></Grid>
                <Grid item xs={3} sm={2}  >
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