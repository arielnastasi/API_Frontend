import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink
} from "react-router-dom";
import Login from './components/Login';
import ABMForms from './components/ABMForms';
import ABMUsers from './components/ABMUsers';


function App() {
	return (
		<Router>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link to="/" className="navbar-brand">Navbar</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink className="nav-link" to="/abm-usuarios" activeClassName="active"> ABM usuarios </NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/login" activeClassName="active"> Login </NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/abm-formularios" activeClassName="active"> ABM formularios </NavLink>
						</li>
					</ul>
				</div>
			</nav>
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
			</Switch>
		</Router>
	);
}

export default App;
