import React, { Fragment, useEffect } from 'react';
import Button from '@material-ui/core/Button';
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
import { makeStyles } from '@material-ui/core/styles';

const Form = () => {

    // States & Variables

    const useStyles = makeStyles((theme) => ({
        greenButton: {
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
        },
        radio: {
            '&$checked': {
                color: '#e3703b'
            }
        },
        checked: {}
    }));

    const location = useLocation();
    const history = useHistory();
    let titulo = location.state;
    const classes = useStyles();

    useEffect(() => {
        console.log(location.pathname);
        titulo = location.state;
    }, [location]);

    // Functions

    const validateForm = (e) => {
        //e.preventDefault();
        
    }

    const routeChange = (path) => {
        history.push(path);
    }

    // JSX

    return (
        <Fragment>
            <nav className="navbar navbar-light bg-white">
                <a className="navbar-brand">
                    <img src={logo} width="200px" />
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
                    <div>
                        <form noValidate onSubmit={validateForm}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} className="my-2">
                                    <h3>{titulo}</h3>
                                    <hr />
                                </Grid>
                                <Grid item xs={12} className="my-2">
                                    <h5>Mail</h5>
                                    <TextField
                                        id="outlined-multiline-static"
                                        rows={4}
                                        fullWidth
                                        defaultValue=""
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} className="my-2">
                                    <h5>Razón social</h5>
                                    <TextField
                                        id="outlined-multiline-static"
                                        rows={4}
                                        fullWidth
                                        defaultValue=""
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} className="my-2">
                                    <h5>Pregunta 1</h5>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        defaultValue=""
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} className="my-2">
                                    <h5>Pregunta 2</h5>
                                    <RadioGroup aria-label="gender" name="gender1">
                                        <FormControlLabel value="female" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Other" />
                                    </RadioGroup>
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="mt-3"
                                className={classes.greenButton}>
                                Enviar
                            </Button>
                        </form>
                    </div>
                </Container>
            </div>
        </Fragment>
    );
}

export default Form;