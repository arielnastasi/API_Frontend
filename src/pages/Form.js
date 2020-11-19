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
import { makeStyles, Paper, Typography } from '@material-ui/core';
import { useParams } from "react-router-dom";
import Barra from '../components/navbar-publica/Barra';
import { orange } from '@material-ui/core/colors';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({

    radio: {
        '&$checked': {
            color: '#00A0B0'
        }
    },
    checked: {},
    paper:{
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1)
    },}
}));

const Form = () => {

    // States & Variables
    const classes = useStyles();
    let { id } = useParams();

    const [formData, handleFormData] = useState({
        nombreForm: '',
        sector: '',
        email: '',
        razonSocial: '',
        sizeBussines:'',
        preguntas: [{
            _id: 0,
            quesion: '',
            selectedResponse: '',
            msgResult:''
            
        }],
    });

    const { nombreForm, email, razonSocial, preguntas, sector } = formData;
    const [showResult, handleSowResult] = useState(true);
    const [hiddenForm, handleHiddenForm] = useState(false);
    const [value,setValue] =  React.useState('');

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
        // console.log(data);
        handleFormData({
            nombreForm: data.form.name,
            preguntas: data.form.questionList,
            sector: data.form.sector
        });

    }

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        let result = JSON.stringify(data);
        console.log(data.email)
        handleFormData({
            ...formData,
            email: data.email,
            razonSocial: data.razonSocial
        })
        validateForm(e);
	}

    const validateForm = (e) => {
        e.preventDefault();  
        formData.preguntas.map((item)=>{
            if(item.questionType = 'Multiple choice'){
                if(item.sizeBussines === 'small'){
                    if(item.referenceSmallBusiness === item.selectedResponse){
                        item.msgResult = "La respuesta es igual a la media"
                    }if (item.selectedResponse > item.referenceSmallBusiness ) {
                        item.msgResult = "La respuesta es superior a la media"
                    } else {
                        item.msgResult = "La respuesta es inferiro a la media"
                    }
                }else{
                    if(item.referenceMediumBusiness === item.selectedResponse){
                        item.msgResult = "La respuesta es igual a la media"
                    }if (item.referenceMediumBusiness > item.referenceSmallBusiness ) {
                        item.msgResult = "La respuesta es superior a la media"
                    } else {
                        item.msgResult = "La respuesta es inferiro a la media"
                    }
                }
            }
        })
        handleSowResult(false);
        handleHiddenForm(true);
        console.log(formData)
    }

    const routeChange = (path) => {
        history.push(path);
    }

    const handleChange = (event) => {
       setValue(event.target.value)
       handleFormData({
        ...formData,
        sizeBussines: event.target.value
    })
      };

     const handleResponse = (event) => {
        formData.preguntas.map((ques)=>{
            if(ques._id = event.target.name){
                ques.selectedResponse = event.target.value
            }
        }
        )
     }


    // JSX

    return (
        <Fragment>
            <Barra />
            <div className="bg-observatorio" style={{ height: 100 + 'vh' }}>
                <Container component="main" maxWidth="sm" className="bg-white p-5">
                    <div hidden={hiddenForm}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2} justify="center" alignContent="center">
                                <Grid item xs={12} className="my-2">
                                    <Paper elevation={1} className={classes.paper}>
                                        <h2>{nombreForm}</h2>
                                        <h5><strong>Formulario id: </strong>{id}</h5>
                                    </Paper>
                                    <h5><strong>Sector: </strong>{sector}</h5>
                                </Grid>
                                <Grid item xs={12} className="my-2">
                                    <h5>Seleccione el tamañio de la empresa</h5>
                                    <RadioGroup aria-label="size" name="size" value={value} onChange={handleChange}>
                                        <FormControlLabel value="medium" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Mediana" />
                                        <FormControlLabel value="small" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Pequeña" />
                                    </RadioGroup>
                                </Grid>
                                <Grid item xs={12}>
                                    {preguntas.map((val, i) => (
                                        val.questionType === "Multiple choice" ?
                                            <Fragment key={i}>
                                                <Typography><HelpOutlineIcon style={{ color: orange[900] }} /> {val.question}</Typography>
                                                <RadioGroup aria-label={val._id} name={val._id} onChange={handleResponse}>
                                                    {val.options.map((item, index) => {
                                                        return (<div key={index}>
                                                            <FormControlLabel value={item} control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label={item} />
                                                        </div>);
                                                    }
                                                    )}
                                                </RadioGroup>
                                            </Fragment>
                                            : <Fragment key={i}>
                                                <Grid item xs={12}>
                                                    <Typography><HelpOutlineIcon style={{ color: orange[900] }} />  {val.question}</Typography>
                                                </Grid>
                                                <Grid item xs={12} className="my-2">
                                                    <TextField
                                                        id={val.question}
                                                        label="Respuesta"
                                                        name={val.question}
                                                        rows={4}
                                                        fullWidth
                                                        defaultValue=""
                                                        variant="outlined"
                                                        inputRef={register}
                                                        required />
                                                </Grid>
                                            </Fragment>
                                    ))}
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
                                        inputRef={register}
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
                                        inputRef={register}
                                        required
                                    />
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
                                        type="submit"
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <div className="card my-1" hidden={showResult}>
                        <div className="card-body">
                            <h5 className="card-title">Los datos ingresados serán analizados y enviados
                            a la dirección de mail proporcionada.</h5>
                            <p className="card-text">Mail: {email} </p>
                            <p className="card-text">Razón social: {razonSocial} </p>
                            {formData.preguntas.map((resp, index) => {
                                return (<div key={index}>
                                    <Typography>{resp.selectedResponse}</Typography>
                                </div>)
                            })}
                            <h1>¡Gracias por participar!</h1>
                        </div>
                    </div>
                </Container>
            </div>
        </Fragment>
    );
}

export default Form;