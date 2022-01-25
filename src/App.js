import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from 'react-scroll-to-top';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Works from './Components/Work';

function App() {
	return (
		<>
			<Header />
			<div id='work'>
				<Works />
			</div>
			<div className='line-left'></div>
			<div id='about'>
				<About />
			</div>
			<div className='line-right'></div>
			<Contact />
			<ScrollToTop className='back-top' smooth />
		</>
	);
}

export default App;
