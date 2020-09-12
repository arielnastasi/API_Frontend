import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './components/Login';
import ABMForms from './components/ABMForms';
import ABMUsers from './components/ABMUsers';
import CreateForm from './components/CreateForm';
import Navbar from './components/Nabvar';
import logo from './imagenes/logo.png';


function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact>
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
					</header>
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/abm-usuarios">
					<ABMUsers />
				</Route>
				<Route path="/abm-formularios">
					<ABMForms />
				</Route>
				<Route path="/create-form">
					<CreateForm />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
