import React, { useState } from 'react';
import MediaCard from './MediaCard';
import { useHistory } from "react-router-dom";

const Benchmarking = () => {

    
	// States & Variables

	const [availableForms, handleAvailableForms] = useState([
		{
			_id: "5f4ebe0c04ce66431062ba3f",
			formName: "Formluario 1",
			formDescription: "Descripción del formulario"
		},
		{
			_id: "5f4ebe0c04ce66431062ba3f",
			formName: "Formluario 2",
			formDescription: "Descripción del formulario"
		},
		{
			_id: "5f4ebe0c04ce66431062ba3f",
			formName: "Formluario 3",
			formDescription: "Descripción del formulario"
		},
		{
			_id: "5f4ebe0c04ce66431062ba3f",
			formName: "Formluario 4",
			formDescription: "Descripción del formulario"
		},
		{
			_id: "5f4ebe0c04ce66431062ba3f",
			formName: "Formluario 5",
			formDescription: "Descripción del formulario"
		},
		{
			_id: "5f4ebe0c04ce66431062ba3f",
			formName: "Formluario 6",
			formDescription: "Descripción del formulario"
		}
	]);

	const history = useHistory();

	// Functions

	const routeChange = (path) => {
		history.push(path);
	}

	// JSX
    return (
        <div class="card-columns container mt-5">
            {availableForms.map((form, i) => 
                <MediaCard 
                    titulo={form.formName} 
                    descripcion={form.formDescription} 
                    _id={form._id} 
                />
            )}
        </div>
    );
}

export default Benchmarking;