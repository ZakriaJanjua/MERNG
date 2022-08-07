import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { ADD_CLIENT } from '../../mutations/clientMutations';
import { GET_CLIENTS } from '../../queries/clientQueries';
import './AddClientForm.css';

const AddClientForm = () => {
	const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
	const [addClient] = useMutation(ADD_CLIENT);

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleClick = (event) => {
		event.preventDefault();
		if (
			formData.name === '' ||
			formData.email === '' ||
			formData.phone === ''
		) {
			return alert('Please fill all fields');
		}
		addClient({
			variables: {
				name: formData.name,
				email: formData.email,
				phone: formData.phone,
			},
			update(cache, { data: { addClient } }) {
				const { getAllClients } = cache.readQuery({
					query: GET_CLIENTS,
				});
				cache.writeQuery({
					query: GET_CLIENTS,
					data: {
						getAllClients: [...getAllClients, addClient],
					},
				});
			},
		});
		setFormData({ name: '', email: '', phone: '' });
	};
	return (
		<div className='addclientform-container'>
			<button className='button' onClick={handleClick}>
				Add Client
			</button>
			<form className='addClientForm'>
				<div className='label-input'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						value={formData.name}
						onChange={handleChange}
					/>
				</div>
				<div className='label-input'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				<div className='label-input'>
					<label htmlFor='phone'>Phone</label>
					<input
						type='text'
						name='phone'
						value={formData.phone}
						onChange={handleChange}
					/>
				</div>
			</form>
		</div>
	);
};

export default AddClientForm;
