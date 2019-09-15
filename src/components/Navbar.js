import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {

	// setTimeout(() => {
	// 	props.history.push('/about')
	// },2000);

	return(
		<nav className="nav-wraper red darken-3">
			<div className="container">
			<a className="brand-logo">React App</a>
				<ul className="right">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/About">About</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
			</div>
		</nav>
	)
}

export default withRouter(Navbar);