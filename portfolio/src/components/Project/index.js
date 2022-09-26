import React, { useState } from 'react';

function Project() {
	const [projects] = useState([
		{
			name: 'P1',
			github: <a href='github.com/Fathpinder'>github.com/Fathpinder</a>,
		},
		{ name: 'p2', github: 'github.com/Fathpinder' },
	]);
	const [currentProject, setCurrentProject] = useState(projects[0]);
	return (
		<section className='portfolio'>
			<h1>{currentProject.name}</h1>
			<p>{currentProject.github}</p>
		</section>
	);
}

export default Project;
