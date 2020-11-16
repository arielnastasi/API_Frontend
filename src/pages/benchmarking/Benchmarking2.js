import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import "./estilo.css"
import "./tarjeta.css"
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import Barra from '../../components/navbar-publica/Barra';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from "react-router-dom";



// subcomponents
import Carousel from './Carousel';
import im1 from '../../imagenes/negocios4.jpg'
import im2 from '../../imagenes/negocios1.jpg'
import im3 from '../../imagenes/negocios5.jpg'
import GreenButton from '../../components/greenButton/GreenButton';


const Benchmarking2 = () => {

	const history = useHistory();
	const location = useLocation();
	const [formularios, handleformularios] = useState([]);
	const [formulariosOriginales, handleformulariosOriginales] = useState([]);
	const [hideLoading, handleHideLoading] = useState(true);
	const [availableFormSectors] = useState([
		"Elaboración de productos alimenticios y/o bebidas",
		"Fabricación de productos textiles",
		"Producción de madera y fabricación de productos de madera, corcho y paja, excepto muebles",
		"Fabricación de papel y de productos de papel",
		"Fabricación de sustancias y de productos químicos",
		"Fabricación de productos de caucho y de plástico",
		"Fabricación de otros productos minerales no metálicos",
		"Fabricación de metales comunes",
		"Fabricación de productos de informática, de electrónica y de óptica",
		"Fabricación de maquinaria y equipo n.c.p.",
		"Fabricación de vehículos automotores, remolques y semirremolques",
		"Fabricación de muebles",
		"Elaboración de productos de tabaco"
	]);

	const fetchFormsData = async () => {
		handleHideLoading(false);
		const res = await fetch('https://interactivas-backend.herokuapp.com/api/forms/getForms', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		});
		const data = await res.json();
		handleHideLoading(true);
		handleformularios(data.forms);
		handleformulariosOriginales(data.forms);
	}

	useEffect(() => {
		fetchFormsData();
	}, [location]);


	const goToForm = (formId) => {
		history.push(`/form/${formId}`);
	}

	const searchFormsBySector = (event) => {
		const searchFor = event.target.value;
		if (searchFor === "default" || searchFor === "all" ) {
			handleformularios(formulariosOriginales);
		} else {
			let searchResult = []
			for (const form in formulariosOriginales) {
				if (formulariosOriginales[form].sector === searchFor) {
					console.log(formulariosOriginales[form]);
					searchResult.push(formulariosOriginales[form]);
				}
			}
			console.log(searchResult);
			handleformularios(searchResult);
		}
	}

	return (
		<div className="App fondo">
			<Barra
				cantFormularios={formularios.length}
			></Barra>

			<Carousel
				imagen1={im1}
				imagen2={im2}
				imagen3={im3}
			></Carousel>
			<div className="container">
				<div className="row mt-4">
					<div className="col-md-12">

						<CircularProgress color="secondary" hidden={hideLoading} />
						{/* {formularios.length === 0 &&
							<Alert severity="info" hidden={!hideLoading}>
								Aún hay formularios disponibles en este momento.
							</Alert>
						} */}
						<div className="col" hidden={!hideLoading}>
							<select className="custom-select mr-sm-2" id="sectores" onChange={(event) => searchFormsBySector(event)}>
								<option value="default">Seleccionar sector...</option>
								<option value="all">Todos los sectores</option>
								{availableFormSectors.map(item => (
									<option key={item} value={item}>
										{item}
									</option>
								))}
							</select>
						</div>
						<div className="row">
							{formularios.map((form, i) => (
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
												onClick={() => goToForm(form._id)} />
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Benchmarking2;
