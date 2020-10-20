import React, { useState } from 'react';
import MediaCard from '../components/MediaCard';
import { useHistory } from "react-router-dom";
import logo from '../imagenes/logo.png'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import OrangeButton from '../components/orangeButton/OrangeButton';
const Benchmarking = () => {

	// States & Variables

	const useStyles = makeStyles((theme) => ({
		
		typo: {
			fontFamily:  'Lato',
    		color: '#279daa',
    		height: 48,
			padding: '0 30px',
			flexGrow: 1,
			textAlign: "center",
			margin: theme.spacing(1, 60, 2),
		}
    }));

	const [availableForms] = useState([
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

	const classes = useStyles();
    const history = useHistory();

	// Functions

	const routeChange = (path) => {
		history.push(path);
	}

	// JSX
	return (
		<div className="bg-observatorio">
			<nav className="navbar">
			<OrangeButton
			nombreBoton="Login Empleados"
			onClick={() => routeChange('/login')}
			/>
				<a className="navbar-brand" href="/">
				<img src={logo} width="200px" alt='Observatorio' />
  				</a>
			</nav>

			<Typography className={classes.typo} variant="h4">Benchmarking</Typography>

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