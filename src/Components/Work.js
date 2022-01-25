import React from 'react';

const Works = () => {
	return (
		<div>
			<p className='text-center py-4 section-img'>
				<img src='/images/works.svg' width='80%' alt='' />
			</p>
			<div className='position-relative'>
				<div className='row row-cols-1 row-cols-md-2 g-4 p-5'>
					<div className='works p-4 '>
						<div
							className='shadow p-2'
							style={{ backgroundColor: '#fff', borderRadius: '20px' }}>
							<a
								href='http://link.farihashifa.me/Style-website'
								rel='noreferrer'
								target='_blank'>
								<p className='text-center'>
									<img src='/images/style.png' width='90%' alt='' />
								</p>
							</a>
							<div className='works-details px-2'>
								<p>
									<img src='/images/style-logo.svg' width='100px' alt='' />
								</p>
								<a
									href='http://link.farihashifa.me/Style-website'
									rel='noreferrer'
									target='_blank'>
									<h2 className='color-primary'>
										E-commerce Website UI Kit (Shopping website UI Design)
									</h2>
								</a>
								<p className='fs-5'>
									A complete UI design kit for a online shopping website. This
									package has all details needed. Opening page, log in
									information, searching clothes, placing order, tracking, cart,
									payment, product details... <a href='/'>See more.</a>
								</p>
							</div>
						</div>
					</div>
					<div className='works p-4 '>
						<div
							className='shadow p-2'
							style={{ backgroundColor: '#fff', borderRadius: '20px' }}>
							<a
								href='http://link.farihashifa.me/style-mobile'
								rel='noreferrer'
								target='_blank'>
								<p className='text-center'>
									<img src='/images/style-mobile.png' width='90%' alt='' />
								</p>
							</a>
							<div className='works-details px-2'>
								<p>
									<img src='/images/style-logo.svg' width='100px' alt='' />
								</p>
								<a
									href='http://link.farihashifa.me/style-mobile'
									rel='noreferrer'
									target='_blank'>
								
									<h2 className='color-primary'>
										E-commerce App UI Design (Shopping Mobile App UI Kit)
									</h2>
								</a>
								<p className='fs-5'>
									A complete UI design kit for a online shopping app. This
									package has all details needed. Opening page, log in
									information, searching clothes, placing order, tracking, cart,
									payment product details... <a href='/'>See more.</a>
								</p>
							</div>
						</div>
					</div>
					<div className='works p-4 '>
						<div
							className='shadow p-2'
							style={{ backgroundColor: '#fff', borderRadius: '20px' }}>
							<a
									href='http://link.farihashifa.me/FoodFest'
									rel='noreferrer'
									target='_blank'>
							<p className='text-center'>
								<img src='/images/foodfest.png' width='90%' alt='' />
								</p>
								</a>
							<div className='works-details px-2'>
								<p>
									<img src='/images/foodfest-logo.svg' width='100px' alt='' />
								</p>
								<a
									href='http://link.farihashifa.me/FoodFest'
									rel='noreferrer'
									target='_blank'>
								<h2 className='color-primary'>
									App UI Kit (Food Delivery Mobile App)
								</h2></a>
								<p className='fs-5'>
									A complete UI design kit for a food delivery company. This
									package has all details needed. Opening page, log in
									information, searching food, placing order, tracking, cart,
									payment product details... <a href='/'>See more.</a>
								</p>
							</div>
						</div>
					</div>
					<div className='works p-4 '>
						<div
							className='shadow p-2'
							style={{ backgroundColor: '#fff', borderRadius: '20px' }}>
							<a
									href='http://link.farihashifa.me/instameal'
									rel='noreferrer'
									target='_blank'>
							<p className='text-center'>
								<img src='/images/instameal.png' width='90%' alt='' />
							</p></a>
							<div className='works-details px-2'>
								<p>
									<img src='/images/instameal-logo.svg' width='100px' alt='' />
								</p>
								<a
									href='http://link.farihashifa.me/instameal'
									rel='noreferrer'
									target='_blank'>
								<h2 className='color-primary'>
									UI Design (Food Delivery Mobile App)
								</h2></a>
								<p className='fs-5'>
									A complete UI design kit for a food delivery company. This
									package has all details needed. Opening page, log in
									information, searching food, placing order, tracking, cart,
									payment product details... <a href='/'>See more.</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className='position-absolute top-0 w-100 h-100'
					style={{ zIndex: '-1' }}>
					<div
						className='row'
						style={{
							height: '80%',
						}}>
						<div
							className='col-8'
							style={{
								background: 'rgba(88, 133, 47, 0.2)',
								height: '90%',
							}}>
							<img src='/images/leaf.svg' width='100%' alt='' />
						</div>
						<div className='col-4 d-flex pb-5 justify-content-end align-items-center'>
							<img src='/images/leaf1.svg' width='100%' alt='' />
						</div>
					</div>
					<div
						className='row'
						style={{
							height: '20%',
						}}>
						<div className='col-4 d-flex pb-5 justify-content-start align-items-start'>
							<img src='/images/leaf2.svg' width='70%' alt='' />
						</div>
						<div
							className='col-8'
							style={{
								background: 'rgba(88, 133, 47, 0.2)',
								height: '80%',
							}}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Works;
