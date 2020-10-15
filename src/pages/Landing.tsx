import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import '../styles/pages/landing.css'
import LogoImg from '../images/logo.svg';

function Landing() {
	return (
		<div id='page-landing'>
      <div className="content-wrapper">
				<img src={LogoImg} alt='LogoHappy'/>
				
				<main>
					<h1>Leve felicidade para o mundo</h1>
					<p>Visite orfanaros e mude o dia de muitas crianças.</p>
				</main>
				<div className="location">
					<strong>Curitiba</strong>
					<span>Paraná</span>
				</div>
				<a href='/app' className="enter-app">
					<FiArrowRight size={26} color='black'/>
				</a>
			</div>
		</div>
	);
}

export default Landing;