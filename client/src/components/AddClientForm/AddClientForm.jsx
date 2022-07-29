import { Fragment } from 'react';
import './AddClientForm.css';

const AddClientForm = () => {
	return (
		<Fragment>
			<button className='button'>Add Client</button>
			<form className='addClientForm'>
				<div className='label-input'>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name'/>
				</div>
				<div className='label-input'>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email'/>
				</div>
				<div className='label-input'>
					<label htmlFor='phone'>Phone</label>
					<input type='text' name='phone'/>
				</div>
			</form>
		</Fragment>
	);
};

export default AddClientForm;
