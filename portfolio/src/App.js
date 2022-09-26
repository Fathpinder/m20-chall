import React from 'react';
// import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import './App.css';

function App() {
	return (
		<div>
			{/* <Header></Header> */}
			<Nav></Nav>

			<main>
				<Project></Project>
				<About></About>
				<Contact></Contact>
			</main>
		</div>
	);
}

export default App;
