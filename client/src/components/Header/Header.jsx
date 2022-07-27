import { Fragment } from 'react';
import './Header.css';

const Header = () => {
	return (
		<Fragment>
			<nav className='navbar'>
				<img
					className='navbar-logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png'
					alt='graphql logo'
				/>
				<p className='navbar-text'>Project Management</p>
			</nav>
		</Fragment>
	);
};

export default Header;
