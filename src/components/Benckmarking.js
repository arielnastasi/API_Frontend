import React, { Fragment, useState } from 'react';
import MediaCard from './MediaCard';
import { useHistory } from "react-router-dom";
import logo from '../imagenes/logo.png'
import Button from '@material-ui/core/Button';

const Benchmarking = () => {


	// States & Variables

	const [availableForms, handleAvailableForms] = useState([
		{
			_id: "5f4ebe0c04ce66431062ba3f",
			formName: "Formluario 1",
			formDescription: "Descripción del formulario"
		},
		{
			_id: "5f4ebe0c04ce66431062ba3g",
			formName: "Formluario 2",
			formDescription: "Descripción del formulario"
		},
		{
			_id: "5f4ebe0c04ce66431062ba3h",
			formName: "Formluario 3",
			formDescription: "Descripción del formulario"
		},
		{
			_id: "5f4ebe0c04ce66431062ba3i",
			formName: "Formluario 4",
			formDescription: "Descripción del formulario"
		},
		{
			_id: "5f4ebe0c04ce66431062ba3j",
			formName: "Formluario 5",
			formDescription: "Descripción del formulario"
		},
		{
			_id: "5f4ebe0c04ce66431062bak",
			formName: "Formluario 6",
			formDescription: "Descripción del formulario"
		},
		{
			_id: "5f4ebe0c04ce66431062ba3l",
			formName: "Formluario 7",
			formDescription: "Descripción del formulario"
		},
		{
			_id: "5f4ebe0c04ce66431062ba3m",
			formName: "Formluario 8",
			formDescription: "Descripción del formulario"
		},
		{
			_id: "5f4ebe0c04ce66431062ba3",
			formName: "Formluario 9",
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
		<div className="bg-observatorio">
			<nav className="navbar navbar-light bg-white">
				<a className="navbar-brand">
				<img src={logo} width="200px" />
					Benchmarking
  				</a>
				<Button 
					variant="contained"
					onClick={() => routeChange('/login')}
				>
					Login Empleados
				</Button>
			</nav>
			<div className="card-columns container py-5">
				{availableForms.map((form, i) =>
					<MediaCard
						titulo={form.formName}
						descripcion={form.formDescription}
						_id={form._id}
						key={form._id}
					/>
				)}
			</div>
		</div>
	);
}

export default Benchmarking;