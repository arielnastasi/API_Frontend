import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const Form = () => {
    return (
        <Container component="main" maxWidth="xs">
            <div>
                <form noValidate className="mt-5">
                    <Grid container spacing={2}>
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
                            {/* <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}> */}
                            <RadioGroup aria-label="gender" name="gender1">
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="mt-3"
                    >
                        Enviar
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default Form;