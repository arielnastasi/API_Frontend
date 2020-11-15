import React, { Fragment, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useLocation } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';
import { useHistory } from "react-router-dom";
import GreenButton from '../components/greenButton/GreenButton';
import OrangeButton from '../components/orangeButton/OrangeButton';
import { makeStyles, Typography } from '@material-ui/core';
import { useParams } from "react-router-dom";
import Barra from '../components/navbar-publica/Barra';
import { orange } from '@material-ui/core/colors';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


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
        nombreForm: '',
        email: '',
        razonSocial: '',
        preguntas: [{
            _id: 0,
            quesion: '',
            selectedResponse:''
        }],
        sizeBussines:''
    });

    const { nombreForm, email, razonSocial, preguntas,sizeBussines} = formData;
    const [showResult, handleSowResult] = useState(true);
    const [hiddenForm, handleHiddenForm] = useState(false);

    //para probar el value
    const [value, setValue] = useState('');


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
        handleFormData({
            nombreForm: data.form.name,
            preguntas: data.form.questionList
        });

    }

    const validateForm = (e) => {
        e.preventDefault();
        handleSowResult(false);
        handleHiddenForm(true);
        console.log(`Usted ingresó los siguientes datos
                     Email: ${email}
                     Razon social: ${razonSocial}
                     cantPreguntas: ${preguntas.length}`);
    }

    const getFormData = (e) => {
        handleFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        console.log(e.target.value)
    }

    const routeChange = (path) => {
        history.push(path);
    }

    // JSX

    return (
        <Fragment>
            <Barra />
            <div className="bg-observatorio" style={{ height: 100 + 'vh' }}>
                <Container component="main" maxWidth="sm" className="bg-white p-5">
                    <div hidden={hiddenForm}>
                        <form noValidate>
                            <Grid container spacing={2} justify="center" alignContent="center">
                                <Grid item xs={12} className="my-2">
                                    <h5>Formulario id: {id}</h5>
                                    <h2><HelpOutlineIcon style={{ color: orange[900] }} /> {nombreForm}</h2>
                                </Grid>
                                <Grid item xs={12}>
                                    {preguntas.map((val, i) => {
                                        return (
                                            val.questionType === "Multiple choice" ?
                                                <Fragment key={i}>
                                                    <Typography>{val.question}</Typography>
                                                    <RadioGroup  aria-label="gender" name={val._id} value={value} onChange={getFormData}>
                                                    {val.options.map((item, index) => {
                                                        return (<div key={index}>
                                                                <FormControlLabel value={item} control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label={item} />
                                                        </div>)}
                                                    )}
                                                    </RadioGroup>
                                                </Fragment>
                                                : <Fragment key={i}>
                                                    <Grid item xs={12}>
                                                        <Typography >{val.question}</Typography>
                                                    </Grid>
                                                    <Grid item xs={12} className="my-2">
                                                        <TextField
                                                            id={val.question}
                                                            label="Respuesta"
                                                            name="respuesta"
                                                            rows={4}
                                                            fullWidth
                                                            defaultValue=""
                                                            variant="outlined"
                                                            onChange={getFormData}
                                                            required
                                                        />
                                                    </Grid>
                                                </Fragment>
                                        )
                                    })}
                                </Grid>
                                <Grid item xs={12} className="my-2">
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
                                    <h5>Tamañio de la empresa</h5>
                                    <RadioGroup aria-label="gender" name="size" onChange={getFormData}>
                                        <FormControlLabel value="medium" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Mediana" />
                                        <FormControlLabel value="small" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Pequeña" />
                                    </RadioGroup>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <OrangeButton
                                        nombreBoton="Volver"
                                        startIcon={<ArrowBackIcon />}
                                        onClick={() => routeChange('/benchmarking')} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <GreenButton
                                        nombreBoton="Enviar"
                                        startIcon={<SendIcon />}
                                        onClick={validateForm}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <div className="card my-1" hidden={showResult}>
                        <div className="card-body">
                            <h5 className="card-title">Los datos ingresados serán analizados y enviados
                            a la dirección de mail proporcionada.</h5>
                            <p className="card-text">Mail: {formData.email} </p>
                            <p className="card-text">Razón social: {formData.razonSocial} </p>
                            {/* {formData.preguntas.map((resp,index)=>{
                            return(<div key={index}>
                                    <Typography>{resp}</Typography>
                                    </div>)})} */}
                            <h1>¡Gracias por participar!</h1>
                        </div>
                    </div>
                </Container>
            </div>
        </Fragment>
    );
}

export default Form;