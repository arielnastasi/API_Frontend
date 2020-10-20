import React from 'react';
import card_img from '../imagenes/form_logo.png';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useHistory } from "react-router-dom";
import GreenButton from './greenButton/GreenButton';

const MediaCard = ({ titulo, descripcion, _id }) => {

    // Sates & Variables

    const history = useHistory();
  
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
                <GreenButton
                startIcon={<ListAltIcon />}
                onClick={() => routeChange(`form/${_id}`, titulo)} 
                />
            </div>
        </div>
    );
}

export default MediaCard