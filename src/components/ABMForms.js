import React, { useState, Fragment } from 'react';
import './ABMUsers.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useHistory } from "react-router-dom";

const ABMForms = () => {

	// States & Variables

	const useStyles = makeStyles((theme) => ({
		greenButton: {
			color: 'white',
			backgroundColor: '#279daa',
			'&:hover': {
				backgroundColor: "#2aadbb",
			},
		},
	}));

	const [forms, handleForms] = useState([
		{
			_id: "1",
			formulario: "Formulario 1",
			name: "SUPER_ADMIN",
			creador: "admin@admin",
		},
		{
			_id: "2",
			formulario: "Formulario 2",
			name: "German Morone",
			creador: "gmorone@uade.edu.ar"
		},
		{
			_id: "3",
			formulario: "Formulario 3",
			name: "Ariel Nastasi",
			creador: "anastasi@uade.edu.ar",
		},
		{
			_id: "4",
			formulario: "Formulario 4",
			name: "July Bustamante",
			creador: "jbustamante@uade.edu.ar",
		},
		{
			_id: "5",
			formulario: "Formulario 5",
			name: "Lautaro Mitelman",
			creador: "lmitelman@uade.edu.ar",
		},
		{
			_id: "6",
			formulario: "Formulario 6",
			name: "Valentin Saettone",
			creador: "vsaettone@uade.edu.ar",
		}
	]);

	const history = useHistory();
	const classes = useStyles();

	// Functions

	const routeChange = (path) => {
		history.push(path);
	}

	// JSX

	return (
		<div className="container mt-5">
			<div className="d-flex justify-content-between mb-3">
				<h3>Administrar formularios</h3>
				<div>
					<Button
						variant="contained"
						color="primary"
						onClick={() => routeChange('/create-forms')}
						className={classes.greenButton}
						startIcon={<PersonAddIcon />}>
						Nuevo formulario
					</Button>
				</div>
			</div>
			<table className="table table-responsive-md">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Formulario</th>
						<th scope="col">Creador</th>
						<th scope="col">Opciones</th>
					</tr>
				</thead>
				<tbody>
					{forms.map((form, i) => (
						<tr key={i}>
							<td className="align-middle">{form._id}</td>
							<td className="align-middle">{form.formulario}</td>
							<td className="align-middle">{form.creador}</td>
							<td className="align-middle">
								<Fragment>
									<IconButton aria-label="delete" color="secondary">
										<DeleteIcon />
									</IconButton>
								</Fragment>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}











export default ABMForms;
