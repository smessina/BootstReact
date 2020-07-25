import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = props => {

	return (
		<div className="container text-center">
			<img src={ logo } className="App-logo d-block m-auto w-25" alt="React Logo" />
			<h1 className="mb-4">{ props.title }</h1>
			<a className="btn btn-outline-primary" href="https://github.com/smessina/BootstReact" target="_blank" rel="noopener noreferrer">{ props.slogan }</a>
		</div>
	)

}

export default App;