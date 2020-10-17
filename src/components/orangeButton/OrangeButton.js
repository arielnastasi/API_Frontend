import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const OrangeButton = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            height: '100vh',
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
    return (
        <div className="d-flex justify-content-center mt-2">
            <Button
                variant="contained"
                className={classes.orangeButton}
                >
                {this.props.nombre}
            </Button>
        </div>
    )
}

export default OrangeButton;