import React, { useState, Fragment } from 'react';
import './ABMUsers.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from "react-router-dom";
import GreenButton from '../../components/greenButton/GreenButton';

const ABMUsers = () => {

	// States & Variables

	const [users] = useState([
		{
			_id: "5f4ebe0c04ce66431062ba3f",
			role: "SUPER_ADMIN",
			name: "SUPER_ADMIN",
			email: "admin@admin",
		},
		{
			_id: "5f4ebdeb04ce66431062ba3e",
			role: "ADMIN",
			name: "German Morone",
			email: "gmorone@uade.edu.ar"
		},
		{
			_id: "5f4ebe0c04ce66431062ba3f",
			role: "ADMIN",
			name: "Ariel Nastasi",
			email: "anastasi@uade.edu.ar",
		},
		{
			_id: "5f4ebe0c04ce66431062ba3f",
			role: "ADMIN",
			name: "July Bustamante",
			email: "jbustamante@uade.edu.ar",
		},
		{
			_id: "5f4ebe0c04ce66431062ba3f",
			role: "ADMIN",
			name: "Lautaro Mitelman",
			email: "lmitelman@uade.edu.ar",
		},
		{
			_id: "5f4ebe0c04ce66431062ba3f",
			role: "ADMIN",
			name: "Valentin Saettone",
			email: "vsaettone@uade.edu.ar",
		}
	]);

	const history = useHistory();

	// Functions

	const routeChange = (path) => {
		history.push(path);
	}

	// JSX

	return (	
		<div className="container mt-5">
			<div className="d-flex justify-content-between mb-3">
				<h3>Administrar usuarios</h3>
				<div>
					<GreenButton
					nombreBoton="Nuevo usuario"
					startIcon={<PersonAddIcon />}
					onClick={() => routeChange('/create-users')}/>
				</div>
			</div>
			<table className="table table-responsive-md">
				<thead>
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Email</th>
						<th scope="col">ID</th>
						<th scope="col">Opciones</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, i) => (
						<tr key={i}>
							<td className="align-middle">{user.name}</td>
							<td className="align-middle">{user.email}</td>
							<td className="align-middle">{user._id}</td>
							<td className="align-middle">
								{user.role !== 'SUPER_ADMIN' &&
									<Fragment>
										{/* <IconButton aria-label="edit" color="primary">
											<EditIcon />
										</IconButton> */}
										<IconButton aria-label="delete" color="secondary">
											<DeleteIcon />
										</IconButton>
									</Fragment>
								}
								{user.role === 'SUPER_ADMIN' &&
									<Fragment>
										{/* <IconButton aria-label="edit" disabled color="primary">
											<EditIcon />
										</IconButton> */}
										<IconButton aria-label="delete" disabled color="secondary">
											<DeleteIcon />
										</IconButton>
									</Fragment>
								}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ABMUsers;

