import React from 'react';
import './App.css';
import UserContainer from './components/UserContainer';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact to="/" component={UserContainer} />
			</Switch>
		</div>
	);
}

export default App;
