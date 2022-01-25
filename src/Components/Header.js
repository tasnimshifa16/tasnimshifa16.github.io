import React from 'react';
import ReactTyped from 'react-typed';
import Navigation from './Navigation';

const Header = () => {
	return (
		<div
			id='home'
			style={{
				backgroundImage: 'url("/images/header-bg.png")',
				backgroundPosition: 'bottom center',
				backgroundSize: 'cover',
			}}>
			<Navigation />

			<div className='container mt-md-5 text-light p-5'>
				<div className='mt-5'></div>
				<div className='row'>
					<div className='col-md-8 col-12'>
						<h2>Hey!</h2>
						<p className='name'>
							I'm{' '}
							<ReactTyped
								strings={[
									' Fariha Tasnim Shifa.',
									' a UI / UX Designer.',
									' a Graphics Designer.',
								]}
								loop
								typeSpeed={40}
								backSpeed={40}
							/>
						</p>

						<p className='description'>
							I'm a professional <strong>UI/UX Designer</strong> and here to
							help you with your design needs. I'm an expert in creating{' '}
							<strong>
								Logos, User interfaces, Mobile App, Software designs.
							</strong>{' '}
							I'll make sure to deliver a quality product. I'm passionate about
							every project I do, always try to make every Design unique &
							professional. Please feel free to contact me about any question.
						</p>

						<ul className='icons d-flex align-items-center'>
							<li>
								<a href='/'><i className="fab fa-facebook-square"></i></a>
							</li>
							<li>
								<a href='/'><i className="fab fa-linkedin"></i></a>
							</li>
							<li>
								<a href='/'><i className="fas fa-envelope"></i></a>
							</li>
							<li>
								<a href='/'><i className="fab fa-behance-square"></i></a>
							</li>
						</ul>
					</div>
					<div className='col-md-6'></div>
				</div>
			</div>
		</div>
	);
};

export default Header;
