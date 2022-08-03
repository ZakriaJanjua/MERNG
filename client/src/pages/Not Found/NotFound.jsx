import { Fragment } from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
export default function NotFound() {
	return (
		<Fragment>
			<div className='container-notfound'>
				<h3 className='heading'>Page Not Found!</h3>
				<h3 className='heading bigger-heading'>404</h3>
				<Link to='/' className='link'>
					<button className='button-notfound'>Go Back</button>
				</Link>
			</div>
		</Fragment>
	);
}
