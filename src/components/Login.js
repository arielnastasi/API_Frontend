import React, { Fragment } from 'react'
import { useForm } from "react-hook-form";
import {
    Grid,
    AppBar,
    Toolbar,
    Paper,
    Button,
    TextField
} from "@material-ui/core";
import logo from '../imagenes/logo.png';


const Login = () => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        let result = JSON.stringify(data);
        if (data.email === 'admin@admin' && data.password === 'secret') {
			alert('Bienvenido!')
		} else {
			alert('Credenciales inválidas!');
		}
        console.log(data);
        console.log(result)
        e.target.reset();
    }
    return (
        <Fragment>
            <AppBar position="static" alignitems="center" color="primary">
                <Toolbar>
                    <Grid container justify="center" wrap="wrap" >
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid container spacing={0} justify="center" direction="row">
                <Grid item xs={4}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        spacing={2}
                        className="login-form">
                        <Paper
                            variant="elevation"
                            elevation={3}
                            className="login-background"
                        >
                            <Grid item>
                                <img className="imag" src={logo} width="300px" alt="Observatorio pyme" /><br />
                            </Grid>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <TextField
                                            type="email"
                                            placeholder="Ingresa tu Email"
                                            name="email"
                                            label="Email"
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
                                            fullWidth
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            inputRef={register({
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese su Password'
                                                },
                                                maxLength: {
                                                    value: 100,
                                                    message: 'No mas de 100 carácteres!'
                                                },
                                                minLength: {
                                                    value: 2,
                                                    message: 'Mínimo 2 carácteres'
                                                }
                                            })}
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            className="button-block"
                                        >
                                            Login</Button>
                                        <span className="text-danger text-small d-block mb-2">
                                            {errors.email?.message}
                                        </span>
                                        <span className="text-danger text-small d-block mb-2">
                                            {errors.password?.message}
                                        </span>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment >
    )
}

export default Login
