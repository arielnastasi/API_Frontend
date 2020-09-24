import React from 'react';
import card_img from '../imagenes/form_logo.png';
import Button from '@material-ui/core/Button';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const MediaCard = ({ titulo, descripcion, _id }) => {

    // Sates & Variables

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
        }
    }));

    const history = useHistory();
    const classes = useStyles();

	// Functions

	const routeChange = (pathname, titulo) => {
		history.push({
            pathname: pathname,
            state: titulo
        });
    }
    
    return (
        <div className="card">
            <img className="card-img-top" src={card_img}  alt='Observatorio'/>
            <div className="card-body d-flex justify-content-center flex-column">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ListAltIcon />}
                    className={classes.greenButton}
                    onClick={() => routeChange(`form/${_id}`, titulo)}>
                    Completar
                </Button>
            </div>
        </div>
    );
}

export default MediaCard