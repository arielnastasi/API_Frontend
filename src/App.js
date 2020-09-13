import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import ABMForms from './components/ABMForms';
import ABMUsers from './components/ABMUsers';
import CreateForm from './components/CreateForm';
import Navbar from './components/Nabvar';
import { createMuiTheme } from '@material-ui/core/styles';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/login" >
					<Login />
				</Route>
				<Route path="/home">
					<Navbar />
				</Route>
				<Route path="/abm-usuarios">
					<Navbar />
					<ABMUsers />
				</Route>
				<Route path="/abm-formularios">
					<Navbar />
					<ABMForms />
				</Route>
				<Route path="/create-form">
					<Navbar />
					<CreateForm />
				</Route>
				<Route path="/">
					<Login />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
