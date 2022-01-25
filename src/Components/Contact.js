import React from 'react';

const Contact = () => {
	return (
		<div id='contact' className='text-center'>
			<p className='py-5 section-img'>
				<img src='/images/contact.svg' width='80%' alt='' />
			</p>

			<div
				className='my-4 d-flex flex-column justify-content-center align-items-center'
				style={{
					height: '300px',
					background: 'url("/images/contactbg.svg")',
					backgroundSize: 'cover',
					backgroundPosition: 'bottom',
				}}>
				<p className='fs-3'>
					Please contact if you want to work with me. Feel free to ask any
					question.
				</p>
				<button className='btn text-success px-5 mt-4 shadow fs-2 bg-white'>
					Say Hello! 👋
				</button>
			</div>
			<p className='py-4 section-img'>
				<img src='/images/thanks.svg' width='80%' alt='' />
			</p>
			<div className='d-flex justify-content-between bg-dark text-footer p-4'>
				<div>
					<span className='text-muted'>&copy; 2022 All Rights Reserved</span> -
					Designed by Fariha Tasnim Shifa.
				</div>
				<div>
					<ul className='icons p-0 m-0 pe-5 me-5 d-flex align-items-center'>
						<li>
							<a href='/'>
								<i className='fab fa-facebook-square'></i>
							</a>
						</li>
						<li>
							<a href='/'>
								<i className='fab fa-linkedin'></i>
							</a>
						</li>
						<li>
							<a href='/'>
								<i className='fas fa-envelope'></i>
							</a>
						</li>
						<li>
							<a href='/'>
								<i className='fab fa-behance-square'></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;
