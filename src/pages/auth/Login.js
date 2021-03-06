import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import logo from '../../imagenes/logo.png';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import OrangeButton from '../../components/orangeButton/OrangeButton';
import GreenButton from '../../components/greenButton/GreenButton';
import { SignIn, isLoggedIn } from './auth.service';
import LinearProgress from '@material-ui/core/LinearProgress';


const Login = () => {

    // States & Variables
    const [loginFLag, setLoginFlag] = useState(true);
    const [hideSpinner, hideAndShowSpinner] = useState(true);

    const useStyles = makeStyles((theme) => ({
        root: {
            height: '100vh',
        },
        image: {
            backgroundImage: 'url(../src/imagenes/pyme_background.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:
                theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        paper: {
            margin: theme.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        }
    }));

    const classes = useStyles();
    const history = useHistory();
    const auth = isLoggedIn();

    const [loginData, handleLoginData] = useState({
        email: '',
        password: '',
    });
    const { email, password } = loginData;

    // Functions

    const getFormData = (e) => {
        handleLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    }

    const validateForm = async (e) => {
        hideAndShowSpinner(false);
        setLoginFlag(true);
        e.preventDefault();
        const userCredentials = {
            password: password,
            email: email
        }
        const res = await fetch('https://interactivas-backend.herokuapp.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCredentials)
        });
        const data = await res.json();
        console.log(res.status);
        if (res.status === 200) {
            SignIn(data.token, data.user.email);
            window.location.reload(false);
        } else {
            setLoginFlag(false);
            hideAndShowSpinner(true);
            localStorage.removeItem("token");
        }
        console.log(data);
    }

    const Copyright = () => {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://www.observatoriopyme.org.ar/" target="_blank">
                    Fundación Observatorio Pyme
            </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const routeChange = (path) => {
        history.push(path);
    }

    useEffect(() => {
        if (auth === true) {
            console.log('Hay un token en localStorage');
            routeChange('/abm-formularios');
        } else {
            console.log('No hay token en localStorage');
        }
    });

    // JSX

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className="background" />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Correo electrónico"
                            name="email"
                            onChange={getFormData}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={getFormData}
                        />
                        <Alert severity="warning" hidden={loginFLag}>¡Verifica tus credenciales!</Alert>
                        <LinearProgress hidden={hideSpinner} />
                        <GreenButton
                            nombreBoton="Iniciar sesión"
                            onClick={validateForm} />
                        <Grid container>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                            <div className="d-flex justify-content-center mt-2">
                                <OrangeButton
                                    nombreBoton="Ir a benchmarking"
                                    onClick={() => routeChange('/benchmarking')} />
                            </div>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default Login;