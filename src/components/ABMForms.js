import React, { useState, Fragment } from 'react';
import './ABMUsers.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const ABMForms = ({ name }) => {
	const [forms] = useState([
		{
			_id: "1",
			formulario: "Nivel de Ingresos",
			name: "SUPER_ADMIN",
			creador: "admin@admin",
		},
		{
			_id: "2",
			formulario: "Sueldos Promedios",
			name: "German Morone",
			creador: "gmorone@uade.edu.ar"
		},
		{
			_id: "3",
			formulario: "Cantidad de empleados",
			name: "Ariel Nastasi",
			creador: "anastasi@uade.edu.ar",
		},
		{
			_id: "4",
			formulario: "Form 4",
			name: "July Bustamante",
			creador: "jbustamante@uade.edu.ar",
		},
		{
			_id: "5",
			formulario: "Form 5",
			name: "Lautaro Mitelman",
			creador: "lmitelman@uade.edu.ar",
		},
		{
			_id: "6",
			formulario: "Form 6",
			name: "Valentin Saettone",
			creador: "vsaettone@uade.edu.ar",
		}
	]);

	return (
		<div className="container mt-5">
			<div className="d-flex justify-content-between mb-3">
				<h3>Gestionar Formularios</h3>
				<Button
					className="mb-2"
					variant="contained"
					color="primary"
					startIcon={<AddIcon/>}>
					Nuevo Formulario
				</Button>
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
									<IconButton aria-label="edit" color="primary">
										<EditIcon />
									</IconButton>
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
