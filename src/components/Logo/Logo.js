import React from 'react';
import Tilt from 'react-tilt';
import brain from './Brain.png';
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 75 }} style={{ height: 130, width: 130 }} >
			 <div className="Tilt-inne pa3"><img style={{paddingTop: 'spx'}} alt='logo' src={brain}/></div>
			</Tilt>
		</div>
	);
}

export default Logo;