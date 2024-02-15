import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../assets/img/brand.png';
import { Link } from 'react-router-dom';

export const NavBar = (props) => {
	return (
		<>
			<header>
				<figure>
					<img
						alt="Logo de la empresa"
						src={logo}
						width="60"
						height="60"
						className="d-inline-block align-top"
					/>{' '}
					<figcaption>
						<Link to={'/'}>React Router</Link>
					</figcaption>
				</figure>

				<nav>
					<ul>
						<Link to="/">Home</Link>
						<Link to="/products">Products</Link>
						<Link to="/contact">Contact</Link>
					</ul>
				</nav>
			</header>
		</>
	);
};

NavBar.propTypes = {};
