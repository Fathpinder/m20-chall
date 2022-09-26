import React, { useState } from 'react';

function Nav() {
	return (
		<header className='flex-row px-1'>
			<h2>
				<a href='/'>Mark Grangaard</a>
			</h2>
			<nav>
				<ul className='flex-row'>
					<li className='mx-2'>
						<a href='#about'>About Me</a>
					</li>
					{/* {projects.map((projects) => (
						<li
							className={`mx-2 ${
								currentProject.name === projects.name && 'navActive'
							}`}
							key={projects.name}
						>
							<span
								onClick={() => {
									setCurrentProject(projects);
								}}
							>
								{projects.name}
							</span>
						</li>
					))} */}
					<li className='mx-2'>
						<a href='#portfolio'>Portfolio</a>
					</li>
					<li className='mx-2'>
						<a href='#contact'>Contact</a>
					</li>
					<li className='mx-2'>
						<a href='#resume'>Resume</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
