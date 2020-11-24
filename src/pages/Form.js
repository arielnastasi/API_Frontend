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
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, List, ListItem, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { useParams } from "react-router-dom";
import Barra from '../components/navbar-publica/Barra';
import { orange } from '@material-ui/core/colors';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useForm } from 'react-hook-form';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({

    radio: {
        '&$checked': {
            color: '#00A0B0'
        }
    },
    checked: {},
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1)
        },
    },
    root: {
        maxWidth: "auto",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: orange[900],
    },
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
        sizeBussines: '',
        preguntas: [{
            _id: 0,
            question: '',
            options: [],
            referenceMediumBusiness: '',
            referenceSmallBusiness: '',
        }]
    });

    const { nombreForm, email, razonSocial, preguntas, sector } = formData;
    const [ results, handleResults ] = useState([])
    const [showResult, handleSowResult] = useState(true);
    const [hiddenForm, handleHiddenForm] = useState(false);
    const [value, setValue] = React.useState('');
    const [addQuantity, setaddQuantity] = React.useState('');
    const [addQuantityQuestion, setaddQuantityQuestion] = React.useState([]);
    const [expanded, setExpanded] = React.useState(false);
    const location = useLocation();
    const history = useHistory();

    let titulo = location.state;

    useEffect(() => {
        titulo = location.state;
        fetchFormData(id);
        window.scrollTo(0, 0);
    }, [location]);

    // Functions

    const fetchFormData = async (_id) => {
        const res = await fetch(`https://interactivas-backend.herokuapp.com/api/forms/getForm/${id}`, {
            method: 'GET',
        });
        const data = await res.json();
        handleFormData({
            nombreForm: data.form.name,
            preguntas: data.form.questionList,
            sector: data.form.sector
        });

    }

    const sendMail = async () => {
    
        let formJson = {
            email: email,
            formName: formData.nombreForm,
            results: results
        }
        console.log("Enviando mail ...");
        console.log(formJson);
        const res = await fetch(`https://interactivas-backend.herokuapp.com/api/forms/sendEmail`, {
            method: 'POST',
            method: 'POST',
        		headers: {
        			'Content-Type': 'application/json',
        			'token': localStorage.getItem('token')
        		},
                body: formJson
        });


    }

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        handleFormData({
            ...formData,
            email: data.email,
            razonSocial: data.razonSocial
        })
        validateFormResults(e);
        sendMail();
    }

    const validateFormResults = (e) => {
        
        e.preventDefault();
        handleSowResult(false);
        handleHiddenForm(true);
        results.forEach((resl)=>{
            let sizeBussines = formData.sizeBussines
            let bench = (sizeBussines==='small')? formData.preguntas
                .find((ben)=>{return ben.question === resl.question}).referenceSmallBusiness:formData.preguntas
                .find((ben)=>{return ben.question === resl.question}).referenceMediumBusiness
            addQuantityQuestion.forEach((val)=>{
                if(resl.question === val.question){
                    let aux = `Su respuesta fué ${resl.result} ${val.addQuantity}, mientras que en el sector ${formData.sector} la media es ${bench}`
                    resl.result = aux 
                }
            }
        )})
        console.log(results)
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

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleResponse = (event) => {
        let answ =  event.target.value
        handleResults([...results,{
            question:event.target.name,
            result:answ
        }])
        
    }


    const handleAddQuantity = (event) => {
        setaddQuantity(event.target.value) 
        setaddQuantityQuestion([...addQuantity,
            {question: event.target.name,
             addQuantity: event.target.value }])
        
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
                                    </Paper>
                                    <h5><strong>Sector: </strong>{sector}</h5>
                                </Grid>
                                <Grid item xs={12} className="my-2">
                                    <h5>Seleccione el tamañio de la empresa</h5>
                                    <RadioGroup aria-label="size" name="size" value={value} onChange={handleChange}>
                                        <FormControlLabel value="small" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Pequeña (10 a 50 ocupados)" />
                                        <FormControlLabel value="medium" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Mediana (51 a 250 ocupados)" />
                                    </RadioGroup>
                                </Grid>
                                <Grid item xs={12}>
                                    {preguntas.map((val, i) => (
                                        val.questionType === "Multiple choice" ?
                                            <Fragment key={i}>
                                                <Typography><HelpOutlineIcon style={{ color: orange[900] }} /> {val.question}</Typography>
                                                <RadioGroup aria-label={val.question} name={val.question} onChange={handleResponse}>
                                                    {val.options.map((item, index) => {
                                                        return (<div key={index}>
                                                            <FormControlLabel value={item} control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label={(addQuantityQuestion.length>0)?`${item} ${addQuantityQuestion.find((value)=>{return value.question === val.question}).addQuantity}`:item} /> 
                                                        </div>);
                                                    }
                                                    )}
                                                </RadioGroup>
                                                <Grid item xs={12} className="my-2">
                                                    <TextField
                                                        id={val.question}
                                                        label="Agregar detalle de respuesta"
                                                        name={val.question}
                                                        rows={4}
                                                        fullWidth
                                                        defaultValue=""
                                                        variant="outlined"
                                                        onBlur={handleAddQuantity}
                                                        required
                                                    />
                                                </Grid>
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
                                                        onBlur={handleResponse}
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
                                        inputRef={
                                            register({
                                                required: {
                                                    value: true,
                                                    message: 'Email es requerido'
                                                },
                                                maxLength: {
                                                    value: 100,
                                                    message: 'No mas de 100 carácteres!'
                                                },
                                                minLength: {
                                                    value: 2,
                                                    message: 'Mínimo 2 carácteres'
                                                }
                                            })
                                        }
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
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        <AssignmentIcon />
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings"
                                        onClick={() => routeChange('/benchmarking')}>
                                        <ArrowBackIcon style={{ color: orange[900] }} />
                                    </IconButton>
                                }
                                title="¡GRACIAS POR PARTICIPAR EN NUESTRO BENCHMARK!"
                                subheader="Los siguientes datos serán enviados
                              a la dirección de mail proporcionada."/>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <strong>Mail:</strong>   {email}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <strong>Razón social:</strong> {razonSocial}
                                </Typography>
                            </CardContent>
                            <CardMedia
                                className={classes.media}
                                image="data:image/jpeg;base64,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"
                                title="pyme"
                            />
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    ABRIR RESULTADOS!!!
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <List>
                                        <ListItem>
                                            <Typography variant="subtitle1" color="textPrimary" component="p">
                                                Resultados de los datos ingresados</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant="body1" color="textPrimary" component="p">
                                                Nombre del Formulario: {formData.nombreForm}</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant="body1" color="textPrimary" component="p">
                                                Sector: {formData.sector}</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant="body1" color="textPrimary" component="p">
                                                Tamaño de la empresa: {(formData.sizeBussines) === "small" ? "Pequeña" : "Mediana"}</Typography>
                                        </ListItem>
                                        {results.map((resp, index) => {
                                            return (<div key={index}>
                                                {(resp.questionType === 'Multiple choice') ?
                                                    <div>
                                                        <ListItem>
                                                            <Typography variant="body1" color="textPrimary" component="p"><HelpOutlineIcon style={{ color: orange[900] }} /> {resp.question}</Typography>
                                                        </ListItem>
                                                        <ListItem>
                                                            <TableContainer>
                                                                <Table aria-label="simple table">
                                                                    <TableHead>
                                                                        <TableRow>
                                                                            <TableCell align="center">Respuesta</TableCell>
                                                                        </TableRow>
                                                                    </TableHead>
                                                                    <TableBody>
                                                                        <TableRow >
                                                                            <TableCell align="center">
                                                                                {resp.result}
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    </TableBody>
                                                                </Table>
                                                            </TableContainer>
                                                        </ListItem>
                                                    </div> :
                                                    <div>
                                                        <ListItem>
                                                            <Typography variant="body1" color="textPrimary" component="p"><HelpOutlineIcon style={{ color: orange[900] }} /> {resp.question}</Typography>
                                                        </ListItem>
                                                        <ListItem>
                                                            <Typography variant="body2" color="textSecondary" component="p">{resp.result}</Typography>
                                                        </ListItem>
                                                    </div>}
                                            </div>
                                            )
                                        })}
                                    </List>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                </Container>
            </div>
        </Fragment>
    );
}

export default Form;