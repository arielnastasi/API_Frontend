import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    greenButton: {
        margin: theme.spacing(3, 0, 2),
        color: 'white',
        backgroundColor: '#279daa',
        '&:hover': {
            backgroundColor: "#2aadbb",
        },
    }
}));

const GreenButton = ({nombreBoton, onClick,startIcon}) => {


    const classes = useStyles();
    return (
        <div className="d-flex justify-content-center mt-2">
            <Button
                variant="contained"
                className={classes.greenButton}
                startIcon={startIcon}
                onClick={onClick}
                >{nombreBoton}
                </Button>
        </div>
    )
}

export default GreenButton;
