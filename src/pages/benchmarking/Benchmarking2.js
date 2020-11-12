import React, { Component } from 'react';
import "./estilo.css"
import "./tarjeta.css"
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import Barra from '../../components/navbar-publica/Barra';

// subcomponents
import Carousel from './Carousel';
import im1 from '../../imagenes/negocios4.jpg'
import im2 from '../../imagenes/negocios1.jpg'
import im3 from '../../imagenes/negocios5.jpg'
import GreenButton from '../../components/greenButton/GreenButton';


class Benchmarking2 extends Component {

	state = {
		formularios: [],
	}

	async componentDidMount() {
		const res = await fetch('https://interactivas-backend.herokuapp.com/api/forms/getForms', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		});
		const data = await res.json();
		this.setState({ formularios: data.forms })
	}

	goToForm(formId) {
		this.props.history.push(`/form/${formId}`);
	}

	render() {
		return (
			<div className="App fondo">
				<Barra
					cantFormularios={this.state.formularios.length}
				></Barra>

				<Carousel
					imagen1={im1}
					imagen2={im2}
					imagen3={im3}
				></Carousel>
				<div className="container">
					<div className="row mt-4">
						<div className="col-md-12">
							<div className="row">
								{this.state.formularios.map((form, i) => (
									<div className="col-md-4" key={i}>
										<div className="tarjeta card mt-4 mb-4 pt-3 ">
											<div className="card-title text-center">
												<h3>{form.name}</h3>
												<span className="badge badge-pill badge-danger ml-auto">
													{form._id}
												</span>
											</div>
											<div className="card-body">
												{form.sector}
											</div>
											<div className="card-footer ">
												<GreenButton
													nombreBoton='Abrir'
													startIcon={<QuestionAnswerOutlinedIcon />}
													onClick={() => this.goToForm(form._id)} />
											</div>
										</div>
									</div>
								))};
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Benchmarking2;
