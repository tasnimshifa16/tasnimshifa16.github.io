import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar bg='transparent' variant="dark" expand='lg'>
			<Container>
				<Navbar.Brand href='#home'>
					<img src='/logo.svg' alt='' height='100' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto'>
						<Nav.Link className='px-3' href='#home'>Home</Nav.Link>
						<Nav.Link className='px-3' href='#work'>Work</Nav.Link>
						<Nav.Link className='px-3' href='#about'>About</Nav.Link>
						<Nav.Link className='px-3' href='#contact'>Contact</Nav.Link>
						<Nav.Link className='px-3 ms-4 btn btn-outline-secondary text-light' href='#link'>Download Resume</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
