import React, { Fragment, Component } from 'react';
import './ABMUsers/ABMUsers.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PostAddIcon from '@material-ui/icons/PostAdd';
import GreenButton from '../components/greenButton/GreenButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';


class ABMForms extends Component {

	state = {
		forms: [],
		hideLoading: false,
		loggedUser: localStorage.getItem('loggedUser'),
		userToken: localStorage.getItem('token')
	}

	async componentDidMount() {
		this.state.hideLoading = false;
		const res = await fetch('https://interactivas-backend.herokuapp.com/api/forms/getForms', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'token': this.state.userToken
			},
		});
		const data = await res.json();
		this.state.hideLoading = true;
		this.setState({ forms: data.forms })
	}

	async deleteForm(id) {
		console.log('must delete form :', id);
		const res = await fetch(`https://interactivas-backend.herokuapp.com/api/forms/deleteForm/${id}`, {
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
		this.props.history.push('/create-forms');
	}

	render() {
		return (
			<div className="container mt-5">
				<div className="d-flex justify-content-center">
					<CircularProgress color="secondary" hidden={this.state.hideLoading} />
				</div>
				<div className="d-flex justify-content-between mb-3" hidden={!this.state.hideLoading}>
					<h3 hidden={!this.state.hideLoading}>Administrar formularios</h3>
					<div hidden={!this.state.hideLoading}>
						<GreenButton
							nombreBoton="Nuevo formulario"
							startIcon={<PostAddIcon />}
							onClick={() => this.routeChange('/create-forms')} />
					</div>
				</div>
				{this.state.forms.length == 0 &&
					<Alert severity="info" hidden={!this.state.hideLoading}>
						Aún no se han generado formularios
					</Alert>
				}
				{this.state.forms.length > 0 &&
					<table className="table table-responsive-md" hidden={!this.state.hideLoading}>
						<thead>
							<tr>
								<th scope="col">Nombre</th>
								<th scope="col">ID</th>
								<th scope="col">Autor</th>
								<th scope="col">Opciones</th>
							</tr>
						</thead>
						<tbody>
							{this.state.forms.map((form, i) => (
								<tr key={i}>
									<td className="align-middle">{form.name}</td>
									<td className="align-middle">{form._id}</td>
									{/* <td className="align-middle">{form.author}</td> */}
									<td className="align-middle">Anónimo</td>
									<td className="align-middle">
										<Fragment>
											<IconButton onClick={() => this.deleteForm(form._id)} aria-label="delete" color="secondary">
												<DeleteIcon />
											</IconButton>
										</Fragment>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				}
			</div>
		);
	}
}

export default ABMForms;
