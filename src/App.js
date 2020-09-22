import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ABMForms from './components/ABMForms';
import ABMUsers from './components/ABMUsers';
import CreateUserForm from './components/CreateUserForm';
import Login from './components/auth/Login';
import Benchmarking from './components/Benckmarking';
import Form from './components/Form';
import Navbar from './components/Nabvar';
import CreateForm from './components/CreateForm';


function App() {

	// States & Variables

	const [isAuthenticated, handleAuthentication] = useState([
		
	]);

	// Functions

	// JSX

	return (
		<Router>
			<Navbar />
			<Switch>
				<Route
					exact
					path="/"
					render={() => {
						return (
							<Redirect to="/login" />
						)
					}}
				/>
				<Route path="/benchmarking" component={Benchmarking} />
				<Route path="/login" component={Login} />
				<Route path="/abm-usuarios" component={ABMUsers} />
				<Route path="/abm-formularios" component={ABMForms} />
				<Route path="/create-users" component={CreateUserForm} />
				<Route path="/create-forms" component={CreateForm} />
				<Route path="/form/:id" component={Form} />
			</Switch>
		</Router>
	);
}

export default App;
