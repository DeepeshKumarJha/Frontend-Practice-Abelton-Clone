import React from 'react';
import './header.css';
import logo from '../../assets/logo/logo.png';

const Header = () => {
	return (
		<>
			<header>
				<div class='header-container'>
					<div id='logo'>
						<img src={logo} alt='logo' />
					</div>
					<div class='nav'>
						<ul>
							<li>Live</li>
							<li>Push</li>
							<li>Link</li>
							<li>Shop</li>
							<li>Packs</li>
							<li>Help</li>
							<li>More +</li>
							<li>Try Live for free</li>
							<li>Log in or register</li>
						</ul>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
