import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ABMForms from './pages/ABMForms';
import ABMUsers from './pages/ABMUsers/ABMUsers';
import CreateUserForm from './pages/CreateUserForm';
import Login from './pages/auth/Login';
import Benchmarking from './pages/Benckmarking';
import Form from './pages/Form';
import Navbar from './components/navbar/Navbar';
import CreateForm from './pages/CreateForm';
import Benchmarking2 from './pages/benchmarking/Benchmarking2';
import { isLoggedIn } from './pages/auth/auth.service';

const auth = isLoggedIn();

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		auth === true
			? <Component {...props} />
			: <Redirect to='/login' />
	)} />
)

function App() {

	// States & Variables

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
				<Route path="/benchmarking" component={Benchmarking2} />
				<Route path="/login" component={Login} />
				<PrivateRoute path="/abm-usuarios" component={ABMUsers} />
				<PrivateRoute path="/abm-formularios" component={ABMForms} />
				<PrivateRoute path="/create-users" component={CreateUserForm} />
				<PrivateRoute path="/create-forms" component={CreateForm} />
				<PrivateRoute path="/form/:id" component={Form} />
				<Route path="/benchmarking2" component={Benchmarking} />
			</Switch>
		</Router>
	);
}

export default App;
