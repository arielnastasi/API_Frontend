import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ABMForms from './components/ABMForms';
import ABMUsers from './components/ABMUsers';
import Navbar from './components/Nabvar';
import CreateUserForm from './components/CreateUserForm';
import Login from './components/auth/Login';
import Benchmarking from './components/Benckmarking';


function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Login}/>
				<Route path="/benchmarking" component={Benchmarking}/>
				<Route path="/login" component={Login}/>
				<Route path="/abm-usuarios" component={ABMUsers} />
				<Route path="/abm-formularios" component={ABMForms} />
				<Route path="/create-users" component={CreateUserForm} />
			</Switch>
		</Router>
	);
}

export default App;
