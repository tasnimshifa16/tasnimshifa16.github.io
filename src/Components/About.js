import React from 'react';

const About = () => {
	return (
		<div className='container'>
			<p className='text-center section-img'>
				<img src='/images/about.svg' width='80%' alt='' />
			</p>
			<div className='about-content'>
				<h2 className=''>Hey There!</h2>
				<p className='name'>
					I'm Fariha, a User Interface & <br className='d-none d-md-block' />
					User Experience Researcher and Designer.
				</p>
				<p className='fs-4'>
					I'm an expert in creating{' '}
					<strong>
						{' '}
						Logos, User interfaces, Mobile App, Website Design, Software
						designs.
					</strong>{' '}
					I'll make sure to deliver a quality product. I'm passionate about
					every project I do, always try to make every Design unique &
					professional. Please feel free to contact me about any question.
				</p>
			</div>
			<div className='row my-5'>
				<div className='col-md-5 text-center'>
					<img src='images/skills.svg' alt='' />
					<div className='p-4 d-flex flex-wrap gap-2 justify-content-center'>
						<span className='btn btn-outline-success fs-5'>
							User Interface Design
						</span>
						<span className='btn btn-outline-success fs-5'>
							User Experience Design
						</span>
						<span className='btn btn-outline-success fs-5 px-4'>
							Graphics Design
						</span>
						<span className='btn btn-outline-success fs-5 px-4'>Creative Art</span>
						<span className='btn btn-outline-success fs-5 px-4'>Logo Design</span>
						<span className='btn btn-outline-success fs-5 px-4'>HTML 5</span>
						<span className='btn btn-outline-success fs-5 px-4'>CSS 3</span>
						<span className='btn btn-outline-success fs-5 px-4'>Bootstrap 5</span>
					</div>
				</div>
				<div className='col-md-2 text-center d-none d-md-flex justify-content-center align-items-center'>
					<img src='/images/line.svg' height={'300px'} alt='' />
				</div>

				<div className='col-md-5 text-center'>
					<img src='images/tools.svg' alt='' />
					<div className='p-4 d-flex flex-wrap gap-2 justify-content-center'>
						<span className='btn btn-outline-success fs-5 px-4'>
							Adobe Illustrator
						</span>
						<span className='btn btn-outline-success fs-5 px-4'>
							Adobe Photoshop
						</span>
						<span className='btn btn-outline-success fs-5 px-4'>Adobe XD</span>
						<span className='btn btn-outline-success fs-5 px-4'>Figma</span>
						<span className='btn btn-outline-success fs-5 px-4'>VS Code</span>
					</div>
				</div>
			</div>
			<br className="mb-5" />
		</div>
	);
};

export default About;
