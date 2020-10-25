import React, { Fragment, Component } from 'react';
import './ABMUsers.css';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import GreenButton from '../../components/greenButton/GreenButton';
import CircularProgress from '@material-ui/core/CircularProgress';

class ABMUsers extends Component {

	state = {
		users: [],
		hideLoading: false,
		loggedUser: localStorage.getItem('loggedUser'),
		userToken: localStorage.getItem('token')
	}

	async componentDidMount() {
		this.state.hideLoading = false;
		const res = await fetch('https://interactivas-backend.herokuapp.com/api/users/getUsers', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'token': this.state.userToken
			},
		});
		const data = await res.json();
		this.state.hideLoading = true;
		console.log(data);
		this.setState({ users: data.users })
	}

	async deleteUser(id) {
		console.log('must delete user :', id);
		const res = await fetch(`https://interactivas-backend.herokuapp.com/api/users/deleteUser/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'token': this.state.userToken
			},
		});
		const data = await res.json();
		console.log(res);
		console.log(data);
		if (res.status == 200) {
            window.location.reload(false);
        }
	}

	routeChange(path) {
		this.props.history.push('/create-users');
	}

	render() {
		return (
			<div className="container mt-5">
				<div className="d-flex justify-content-center">
					<CircularProgress color="secondary" hidden={this.state.hideLoading}/>
				</div>
				<div className="d-flex justify-content-between mb-3" hidden={!this.state.hideLoading}>
					<h3 hidden={!this.state.hideLoading}>Administrar usuarios</h3>
					<div hidden={!this.state.hideLoading}>
						<GreenButton
							nombreBoton="Nuevo usuario"
							startIcon={<PersonAddIcon />}
							onClick={() => this.routeChange('/create-users')} />
					</div>
				</div>
				<table className="table table-responsive-md" hidden={!this.state.hideLoading}>
					<thead>
						<tr>
							<th scope="col">Nombre</th>
							<th scope="col">Email</th>
							<th scope="col">Rol</th>
							<th scope="col">ID</th>
							<th scope="col">Opciones</th>
						</tr>
					</thead>
					<tbody>
						{this.state.users.map((user, i) => (
							<tr key={i}>
								<td className="align-middle">{user.name}</td>
								<td className="align-middle">{user.email}</td>
						<td className="aling-middle">{user.role}</td>
								<td className="align-middle">{user._id}</td>
								<td className="align-middle">
									{user.email !== this.state.loggedUser &&
										<Fragment>
											<IconButton onClick={() => this.deleteUser(user._id)} aria-label="delete" color="secondary">
												<DeleteIcon />
											</IconButton>
										</Fragment>
									}
									{user.email == this.state.loggedUser &&
										<Fragment>
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

}

export default ABMUsers;

