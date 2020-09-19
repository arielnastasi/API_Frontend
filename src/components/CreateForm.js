import React, { useState } from 'react';
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


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
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
	},
	orangeButton: {
		color: 'white',
		backgroundColor: '#e3703b',
		'&:hover': {
			backgroundColor: "#e76123",
		},
	},
}));


const CreateUserForm = () => {

	// States & Variables

	const [questionTypeForm, handleQuestionTypeForm] = useState('choice');

	const [questionData, handleQuestionData] = useState({
		questionType: '',
		question: '',
		options: '',
	});

	const [questionList, handleQuestionList] = useState([]);

	let { question, options } = questionData;
	const classes = useStyles();
	const history = useHistory();

	// Functions

	const getQuestionType = (e) => {
		console.log(e.target.value);
		handleQuestionTypeForm(e.target.value);
	}

	const getFormData = (e) => {
		handleQuestionData({
			...questionData,
			[e.target.name]: e.target.value
		})
	}

	const validateQuestionForm = (e) => {
		e.preventDefault();
		addQuestion();
	}

	const addQuestion = (e) => {
		options = options.split(';')
		let questionObject = {
			questionType: questionTypeForm,
			question: question,
			options: options
		}
		console.log(questionObject);
		handleQuestionList([
			...questionList, questionObject
		]);
		handleQuestionData({
			question: '',
			options: '',
		})
	}

	const deleteQuestion = (index) => {
		let newQuestionList = [...questionList];
		newQuestionList.splice(index, 1);
		handleQuestionList(newQuestionList);
	}

	const routeChange = (path) => {
		history.push(path);
	}

	// JSX

	return (
		<div>
			<Container component="main" maxWidth="sm">
				<CssBaseline />
				<div className={classes.paper}>
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
										<option value={'choice'}>Multiple Choice</option>
										<option value={'text'}>Texto libre</option>
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
									onChange={getFormData}
									value={question}
								/>
							</Grid>
							{questionTypeForm == 'choice' ?
								<Grid item xs={12}>
									<p className="mt-3">Ingrese las opciones separadas por punto y coma (;)</p>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="options"
										label="Ejemplo: Banana;Pera;Manzana;Naranja"
										name="options"
										onChange={getFormData}
										value={options}
									/>
								</Grid>
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
								className="mx-2 w-50"
								variant="contained"
								startIcon={<CheckCircleIcon />}
								className={classes.orangeButton}>
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
				<Container component="main" maxWidth="xs">
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
									<h5 className="card-title">{question.question}</h5>
									<p className="card-text">{question.questionType}</p>
									<p className="card-text">{question.options}</p>
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