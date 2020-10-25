import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from "react-router-dom";
import BackspaceIcon from '@material-ui/icons/Backspace';
import LinearProgress from '@material-ui/core/LinearProgress';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import GreenButton from '../components/greenButton/GreenButton';
import OrangeButton from '../components/orangeButton/OrangeButton';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    greenButton: {
        margin: theme.spacing(3, 0, 2),
        color: 'white',
        backgroundColor: '#279daa',
        '&:hover': {
            backgroundColor: "#2aadbb",
        },
    },
}));


const CreateUserForm = () => {

    // States & Variables

    const [userData, handleUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [roleTypeForm,handleRoleTypeForm] = useState('SINROL')
    const [open, setOpen] = React.useState(false);
    const [errorInForm, handleErrorInForm] = useState(false);
    const [invalidEmail, handleInvalidEmail] = useState(false);
    const [hideSpinner, hideAndShowSpinner] = useState(true);
    const [loading, handleLoading] = useState(false);
    const classes = useStyles();
    const history = useHistory();
    const { firstName, lastName, rol, email, password } = userData;
    const emailRegex = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    // Functions

    const getFormData = (e) => {
        handleUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const validateForm = (e) => {
        console.log(e)
        e.preventDefault();
        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
            handleErrorInForm(true);
            return
        } else {
            handleErrorInForm(false);
            createUser();
            // if (emailRegex.test(email) === false) {
            //     handleInvalidEmail(true);
            //     return
            // } else {
            //     handleInvalidEmail(false);
            //     createUser();
            // }
        }
    }

    const createUser = async (e) => {
        hideAndShowSpinner(false);
        let newUser = {
            name: `${firstName} ${lastName}`,
            role: roleTypeForm,
            email: email,
            password: password,
        }
        console.log(newUser);
        const res = await fetch('https://interactivas-backend.herokuapp.com/api/users/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            },
            body: JSON.stringify(newUser)
        });
        const data = await res.json();
        if (res.status == 200) {
            handleLoading(false);
            hideAndShowSpinner(true);
            routeChange('/abm-usuarios');
            console.log(res);
            console.log(data);
        } else {
            handleClick();
            hideAndShowSpinner(true);
            console.log(res);
            console.log(data);
        }
    }

    const routeChange = (path) => {
        history.push(path);
    }
    //para obtener el valor de la seleccion de rol
    const getRoleType = (e) => {
        handleRoleTypeForm(e.target.value);
    }

    // JSX

    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={4000}
                    onClose={handleClose}
                    message="¡Ha ocurrido un error!"
                    action={
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                    }
                />
            </div>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.greenButton}>
                    <PersonAddIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Nuevo usuario
                </Typography>
                {loading
                    ?
                    <div className="mt-5">
                        <CircularProgress />
                    </div>
                    :
                    <form className={classes.form} noValidate onSubmit={validateForm}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstName"
                                    value={firstName}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Nombre"
                                    onChange={getFormData}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    value={lastName}
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Apellido"
                                    name="lastName"
                                    onChange={getFormData}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    value={email}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Correo electrónico"
                                    name="email"
                                    onChange={getFormData}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    value={password}
                                    fullWidth
                                    name="password"
                                    label="Contraseña temporal"
                                    type="password"
                                    id="password"
                                    onChange={getFormData}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl variant="outlined" fullWidth >
                                    <InputLabel htmlFor="outlined-age-native-simple">Tipo</InputLabel>
                                    <Select
                                        native
                                        name="rolType"
                                        onChange={getRoleType}
                                        label="Tipo">
                                        <option value={'ADMIN'}>Administrador</option>
                                        <option value={'USER'}>Usuario</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            {errorInForm ?
                                <Grid item xs={12}>
                                    <Alert severity="error">Todos los campos son obligatorios!</Alert>
                                </Grid>
                                : null
                            }
                            {invalidEmail ?
                                <Grid item xs={12}>
                                    <Alert severity="error">El correo electrónico es invalido!</Alert>
                                </Grid>
                                : null
                            }
                        </Grid>
                        <LinearProgress color="secondary" hidden={hideSpinner} />
                        <Grid container spacing={2} alignItems="center" >
                            <Grid item xs={12} sm={6}>
                                <OrangeButton
                                    startIcon={<BackspaceIcon />}
                                    nombreBoton="Cancelar"
                                    onClick={() => routeChange('/abm-usuarios')} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <GreenButton
                                    disabled={!hideSpinner}
                                    nombreBoton="crear"
                                    type="submit" />
                            </Grid>
                        </Grid>
                    </form>
                }
            </div>
        </Container>
    );
}

export default CreateUserForm;