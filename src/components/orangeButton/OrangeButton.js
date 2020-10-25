import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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

const OrangeButton = ({nombreBoton, onClick, startIcon}) => {


    const classes = useStyles();
    return (
        <div className="d-flex justify-content-center mt-2">
            <Button
                variant="contained"
                fullWidth
                startIcon={startIcon}
                className={classes.orangeButton}
                onClick={onClick}
                >{nombreBoton}
                </Button>
        </div>
    )
}

export default OrangeButton;