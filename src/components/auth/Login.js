import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
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

const Login = () => {

    // States & Variables
    const [loginFLag,setLoginFlag] = useState(true);
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
        },
        greenButton: {
            margin: theme.spacing(3, 0, 2),
            color: 'white',
            backgroundColor: '#279daa',
            '&:hover': {
                backgroundColor: "#2aadbb",
            },
        },
        orangeButton: {
            color: 'white',
            backgroundColor: '#e3703b',
            '&:hover': {
                backgroundColor: "#e76123",
            },
        }
    }));

    
    const classes = useStyles();
    const history = useHistory();

   
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
        })
    }

    const validateForm = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (email === 'admin@admin.com' && password === 'secretos') {
            routeChange('/abm-formularios');
        } else {
            setLoginFlag(false);
        }
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

    // JSX

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className="background" />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <form className={classes.form} noValidate onSubmit={validateForm}>
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.greenButton}>
                            Iniciar sesión
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link variant="body2">
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                            <div className="d-flex justify-content-center mt-2">
                                <Button
                                    variant="contained"
                                    className={classes.orangeButton}
                                    onClick={() => routeChange('/benchmarking')}>
                                    Ir a benchmarking
                                </Button>
                            </div>
                        </Box>
                    </form>
                </div>
                <Alert severity="warning" hidden={loginFLag}>¡Verifica tus credenciales!</Alert>
            </Grid>
        </Grid>
    );
}

export default Login;