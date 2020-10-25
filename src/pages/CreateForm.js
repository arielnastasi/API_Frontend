import React, { useState, Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import BackspaceIcon from '@material-ui/icons/Backspace';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HelpIcon from '@material-ui/icons/Help';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import DeleteIcon from '@material-ui/icons/Delete';
import ListIcon from '@material-ui/icons/List';
import Chip from '@material-ui/core/Chip';
import ListAltIcon from '@material-ui/icons/ListAlt';
import OrangeButton from '../components/orangeButton/OrangeButton';
import Alert from '@material-ui/lab/Alert';



const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(12),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	greenButton: {
		margin: theme.spacing(3, 0, 2),
		color: 'white',
		backgroundColor: '#279daa',
		'&:hover': {
			backgroundColor: "#2aadbb",
		},
	}
}));


const CreateUserForm = () => {

	// States & Variables

	const [formName, handleFormName] = useState('');
	const [questionTypeForm, handleQuestionTypeForm] = useState('choice');
	const [formSector, handleFormSector] = useState('choice');

	const [questionData, handleQuestionData] = useState({
		questionType: '',
		question: '',
		options: '',
		referenceSmallBusiness: '',
		referenceMediumBusiness: ''
	});

	const [questionList, handleQuestionList] = useState([]);
	let [option, handleOptionValue] = useState('');
	const [optionsList, handleOptionsList] = useState([]);

	let { question, referenceMediumBusiness, referenceSmallBusiness } = questionData;

	const classes = useStyles();
	const history = useHistory();

	const availableFormSectors = [
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
	]

	// Functions

	const getFormaName = (e) => {
		handleFormName(e.target.value);
	}

	const getQuestionType = (e) => {
		console.log(e.target.value);
		handleQuestionTypeForm(e.target.value);
	}

	const getFormSector = (e) => {
		console.log(e.target.value);
		handleFormSector(e.target.value);
	}

	const getQuestionData = (e) => {
		handleQuestionData({
			...questionData,
			[e.target.name]: e.target.value
		})
	}

	const getOptionData = (e) => {
		handleOptionValue(e.target.value);
	}

	const addOptionToOptionsList = (e) => {
		console.log(`Se agregó "${option}" a la lista de opciones`);
		if (option !== '') {
			handleOptionsList([
				...optionsList, option
			]);
			handleOptionValue('');
		}
	}

	const validateQuestionForm = (e) => {
		e.preventDefault();
		addQuestion();
	}

	const addQuestion = (e) => {
		let questionObject = {
			questionType: questionTypeForm,
			question: question,
			options: optionsList,
			referenceSmallBusiness: referenceSmallBusiness,
			referenceMediumBusiness: referenceMediumBusiness
		}
		console.log(questionObject);
		handleQuestionList([
			...questionList, questionObject
		]);
		handleQuestionData({
			question: '',
			options: '',
			referenceSmallBusiness: '',
			referenceMediumBusiness: ''
		});
		handleOptionsList([]);
	}

	const deleteQuestion = (index) => {
		let newQuestionList = [...questionList];
		newQuestionList.splice(index, 1);
		handleQuestionList(newQuestionList);
	}

	const deleteOption = (index) => {
		let newOptionsList = [...optionsList];
		newOptionsList.splice(index, 1);
		handleOptionsList(newOptionsList);
	}

	const routeChange = (path) => {
		history.push(path);
	}

	const generateForm = async () => {
		let newForm = {
			name: formName,
			sector: formSector,
			questionList: questionList
		}
		console.log(newForm);
		const res = await fetch('https://interactivas-backend.herokuapp.com/api/forms/createForm', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'token': localStorage.getItem('token')
			},
			body: JSON.stringify(newForm)
		});
		const data = await res.json();
		if (res.status == 200) {
			// handleLoading(false);
			// hideAndShowSpinner(true);
			routeChange('/abm-formularios');
			console.log(res);
			console.log(data);
		} else {
			// handleClick();
			// hideAndShowSpinner(true);
			console.log(res);
			console.log(data);
		}
	}

	// JSX

	return (
		<div>
			<Container component="main" maxWidth="sm">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.greenButton}>
						<ListAltIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Generar nuevo formulario
                	</Typography>
					<TextField
						variant="outlined"
						className="my-4"
						required
						fullWidth
						id="formName"
						label="Nombre del formulario"
						name="formName"
						onChange={getFormaName}
						value={formName}
					/>
					<FormControl variant="outlined" fullWidth className={classes.formControl}>
						<InputLabel htmlFor="outlined-age-native-simple">Sector</InputLabel>
						<Select
							native
							name="formSector"
							onChange={getFormSector}
							label="Sector">
							{availableFormSectors.map((sector, i) => (
								<option value={sector}>
									{sector}
								</option>
							))}
						</Select>
					</FormControl>
					<p className="mt-4">----------------------------------------------</p>
					<Avatar className={classes.greenButton}>
						<HelpIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Añadir pregunta
                	</Typography>
					<form className={classes.form} noValidate onSubmit={validateQuestionForm}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12}>
								<FormControl variant="outlined" fullWidth className={classes.formControl}>
									<InputLabel htmlFor="outlined-age-native-simple">Tipo</InputLabel>
									<Select
										native
										name="questionType"
										onChange={getQuestionType}
										label="Tipo">
										<option value={'Multiple choice'}>Multiple Choice</option>
										<option value={'Text'}>Texto libre</option>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="question"
									label="Pregunta"
									name="question"
									onChange={getQuestionData}
									value={question}
								/>
							</Grid>
							{questionTypeForm === 'choice' ?
								<Fragment>
									<Grid item xs={12}>
										<p className="mt-3 mb-1">Ingrese una opción:</p>
										<TextField
											variant="outlined"
											required
											fullWidth
											id="option"
											placeholder="Ejemplo: 300"
											name="option"
											value={option}
											onChange={getOptionData}
										/>
									</Grid>
									<div className="d-flex justify-content-center w-100 mt-1">
										<OrangeButton
											nombreBoton="Añadir opción"
											onClick={() => addOptionToOptionsList()} />
									</div>
									<div className="my-3">
										{optionsList.map((option, index) => (
											<Chip className="m-2" key={index} label={option} onDelete={() => deleteOption(index)} color="primary" />
										))}
									</div>
									<Grid item xs={12}>
										<p className="mt-5 mb-1">Valor de referencia promedio para empresas pequeñas</p>
										<TextField
											variant="outlined"
											required
											fullWidth
											id="options"
											placeholder="Ejemplo: 500"
											name="referenceSmallBusiness"
											onChange={getQuestionData}
											value={referenceSmallBusiness}
										/>
									</Grid>
									<Grid item xs={12}>
										<p className="mt-3 mb-1">Valor de referencia promedio para empresas medianas:</p>
										<TextField
											variant="outlined"
											required
											fullWidth
											id="options"
											placeholder="Ejemplo: 800"
											name="referenceMediumBusiness"
											onChange={getQuestionData}
											value={referenceMediumBusiness}
										/>
									</Grid>
								</Fragment>
								:
								null
							}
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.greenButton}
							startIcon={<AddCircleIcon />}>
							Añadir pregunta
                        </Button>
						<Grid container justify="center">
							<Button
								variant="contained"
								startIcon={<CheckCircleIcon />}
								className={classes.orangeButton}
								onClick={() => generateForm()}>
								Generar formulario
                            	</Button>
							<Button
								className="mx-2"
								variant="contained"
								startIcon={<BackspaceIcon />}
								onClick={() => routeChange('/abm-formularios')}>
								Cancelar
                            </Button>
						</Grid>
					</form>
				</div>
			</Container>
			{questionList.length > 0 ?
				<Container component="main" maxWidth="xs" className="mt-5">
					<CssBaseline />
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<ListIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Preguntas
						</Typography>
						{questionList.map((question, index) => (
							<div className="card my-1" key={index}>
								<div className="card-body">
									<h5 className="card-title">Pregunta: "{question.question}"</h5>
									<p className="card-text">Tipo: {question.questionType}</p>
									{question.questionType === "choice" ?
										<Fragment>
											<p className="card-text">Opciones:</p>
											{question.options.map((option, index) => (
												<p className="card-text" key={index}> - {option}</p>
											))}
											<p className="card-text">Referencia promedio para empresas pequeñas: {question.referenceSmallBusiness}</p>
											<p className="card-text">Referencia promedio para empresas medianas: {question.referenceMediumBusiness}</p>
										</Fragment>
										:
										null
									}
									<Button
										variant="contained"
										color="secondary"
										className={classes.button}
										startIcon={<DeleteIcon />}
										onClick={() => deleteQuestion(index)}>
										Eliminar
      								</Button>
								</div>
							</div>
						))}
					</div>
				</Container>
				:
				null}
		</div>
	);
}

export default CreateUserForm;