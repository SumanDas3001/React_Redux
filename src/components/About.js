import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About = () => {
	return(
		<div className="container">
			<h1 className="center">About</h1>
			<p className="center"> is simply dummy text of the printing and typesetting industry</p>
		</div>
	); 
}

export default Rainbow(About);