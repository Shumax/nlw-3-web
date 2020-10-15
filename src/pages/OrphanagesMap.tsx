import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import marker from '../images/Vector.svg';
import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';
import { relative } from 'path';

function OrphanagesMap() {
	return (
		<div id='page-map'>
			<aside className='aside'>
				<header>
					<img src={marker} alt='Happy'/>
					<h2>Escolha um orfanato no mapa</h2>
					<p>Muitas crianças estão esperando a sua visita :)</p>
				</header>

				<footer>
					<strong>Curitiba</strong>
					<span>Paraná</span>
				</footer>
			</aside>
			<Map
					center={[-25.4872881,-49.2942932]}
					zoom={15}
					style={{ width: '100%', height: '100%', position: 'relative', zIndex: 0 }}
			>
				<TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
				
			</Map>
			<Link to='' className='create-orphanage'>
				<FiPlus size={32} color='#fff'/>
			</Link>
		</div>
	);
}

export default OrphanagesMap;