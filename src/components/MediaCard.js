import React from 'react';
import bg from '../imagenes/pyme_background.jpg';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Icon from '@material-ui/core/Icon';

const MediaCard = ({ titulo }) => {
    return (
        <div className="card">
            <img src={bg} className="card-img-top" max-width="400px" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">Form description.</p>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ListAltIcon />}>
                    Completar
                </Button>
            </div>
        </div>
    );
}

export default MediaCard