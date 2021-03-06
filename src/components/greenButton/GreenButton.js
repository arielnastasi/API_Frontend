import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    greenButton: {
        //margin: theme.spacing(3, 0, 2),
        color: 'white',
        backgroundColor: '#00A0B0',
        '&:hover': {
            backgroundColor: "#00A0B0",
        },
    }
}));

const GreenButton = ({nombreBoton, onClick,startIcon,type/*,type data_target, data_toggle*/}) => {


    const classes = useStyles();
    return (
        <div className="d-flex justify-content-center mt-2">
            <Button
                variant="contained"
                className={classes.greenButton}
                fullWidth
                startIcon={startIcon}
                onClick={onClick}
                type={type}
                >{nombreBoton}
                </Button>
        </div>
    )
}

export default GreenButton;
