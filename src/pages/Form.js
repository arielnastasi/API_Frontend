import React, { Fragment, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import logo from '../imagenes/logo.png'
import { useLocation } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";
import GreenButton from '../components/greenButton/GreenButton';
import { Button, makeStyles } from '@material-ui/core';
import { useParams } from "react-router-dom";
  

const useStyles = makeStyles((theme) => ({
    
    radio: {
        '&$checked': {
            color: '#e3703b'
        }
    },
    checked: {}
}));

const Form = () => {

    // States & Variables 
    const classes = useStyles();
    let { id } = useParams();

    const [formData, handleFormData] = useState({
        email: '',
        razonSocial: '',
        pregunta1: '',
        pregunta2: ''
    });

    const { email, razonSocial, pregunta1, pregunta2 } = formData;
    const [ showResult, handleSowResult ] = useState(true);
    const [ hiddenForm, handleHiddenForm] = useState(false);


    const location = useLocation();
    const history = useHistory();
    let titulo = location.state;

    useEffect(() => {
        titulo = location.state;
        console.log(id);
        fetchFormData(id);
        window.scrollTo(0, 0);
    }, [location]);

    // Functions

    const fetchFormData = async (_id) => {
        const res = await fetch(`https://interactivas-backend.herokuapp.com/api/forms/getForm/${id}`, {
            method: 'GET',
        });
        const data = await res.json();
        console.log(data);
    }

    const validateForm = (e) => {
        e.preventDefault();
        handleSowResult(false);
        handleHiddenForm(true);
        console.log(`Usted ingresó los siguientes datos
                     Email: ${email}
                     Razon social: ${razonSocial}
                     Pregunta 1: ${pregunta1}
                     Pregunta 2: ${pregunta2}`);
    }

    const getFormData = (e) => {
        handleFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const routeChange = (path) => {
        history.push(path);
    }

    // JSX

    return (
        <Fragment>
            <nav className="navbar navbar-light bg-white">
                <a className="navbar-brand" href="/">
                    <img src={logo} width="200px" alt='observatorio' />
						Benchmarking
  				</a>
                <Button
                    variant="contained"
                    onClick={() => routeChange('/benchmarking')}
                    startIcon={<ArrowBackIcon />}>
                    Volver
				</Button>
            </nav>
            <div className="bg-observatorio" style={{ height: 100 + 'vh' }}>
                <Container component="main" maxWidth="sm" className="bg-white p-5">
                    <div hidden = {hiddenForm}>
                        <form noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} className="my-2">
                                    <h3>{titulo}</h3>
                                    <hr />
                                </Grid>
                                <Grid item xs={12} className="my-2">
                                    <h5>Formulario id: {id}</h5>
                                    <TextField
                                        id="email"
                                        label="Correo electrónico"
                                        name="email"
                                        rows={4}
                                        fullWidth
                                        defaultValue=""
                                        variant="outlined"
                                        onChange={getFormData}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} className="my-2">
                                    <h5>Razón social</h5>
                                    <TextField
                                        id="razonSocial"
                                        name="razonSocial"
                                        label="Razon social"
                                        rows={4}
                                        fullWidth
                                        defaultValue=""
                                        variant="outlined"
                                        onChange={getFormData}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} className="my-2">
                                    <h5>Pregunta 1</h5>
                                    <TextField
                                        id="pregunta1"
                                        name="pregunta1"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        defaultValue=""
                                        variant="outlined"
                                        onChange={getFormData}
                                    />
                                </Grid>
                                <Grid item xs={12} className="my-2">
                                    <h5>Pregunta 2</h5>
                                    <RadioGroup aria-label="gender" name="pregunta2" onChange={getFormData}>
                                        <FormControlLabel value="Femenino" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Female" />
                                        <FormControlLabel value="Masculino" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Male" />
                                        <FormControlLabel value="Other" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Other" />
                                    </RadioGroup>
                                </Grid>
                            </Grid>
                            <GreenButton
                            nombreBoton="Enviar"
                           onClick={validateForm} 
                            />
                        </form>
                    </div>
                    <div className="card my-1" hidden={showResult}>
                        <div className="card-body">
                            <h5 className="card-title">Los datos ingresados serán analizados y enviados
                            a la dirección de mail proporcionada.</h5>
									<p className="card-text">Mail: {formData.email} </p>
                                    <p className="card-text">Razón social: {formData.razonSocial} </p>
                                    <p className="card-text">Pregunta 1: {formData.pregunta1} </p>
                                    <p className="card-text">pregunta2: {formData.pregunta2} </p>
                            <h1>¡Gracias por participar!</h1>        
                        </div>
                    </div>
                </Container>
            </div>
        </Fragment>
    );
}

export default Form;