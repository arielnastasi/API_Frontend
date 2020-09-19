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
    const [errorInForm, handleErrorInForm] = useState(false);
    const [invalidEmail, handleInvalidEmail] = useState(false);
    const [loading, handleLoading] = useState(false);
    const classes = useStyles();
    const history = useHistory();
    const { firstName, lastName, email, password } = userData;
    const emailRegex = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    // Functions

    const getFormData = (e) => {
        handleUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const validateForm = (e) => {
        e.preventDefault();
        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
            handleErrorInForm(true);
            return
        } else {
            handleErrorInForm(false);
            if (emailRegex.test(email) == false) {
                handleInvalidEmail(true);
                return
            } else {
                handleInvalidEmail(false);
                createUser();
            }
        }
    }

    const createUser = (e) => {
        let newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        }
        console.log(newUser);
        handleLoading(true);
        setTimeout(() => {
            handleLoading(false);
            routeChange('/abm-usuarios')
        }, 1500);
    }

	const routeChange = (path) => {
		history.push(path);
	}

    // JSX

    return (
        <Container component="main" maxWidth="xs">
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.greenButton}>
                            Crear
                        </Button>
                        <Grid container justify="flex-end">
                            <Button
                                variant="contained"
                                startIcon={<BackspaceIcon/>}
                                onClick={() => routeChange('/abm-usuarios')}>
                                Cancelar
                            </Button>
                        </Grid>
                    </form>
                }
            </div>
        </Container>
    );
}

export default CreateUserForm;