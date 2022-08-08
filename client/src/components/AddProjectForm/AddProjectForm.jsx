import { useState } from 'react';
import { useQuery } from '@apollo/client';
import './AddProjectForm.css';
import { GET_CLIENTS } from '../../queries/clientQueries';

export default function AddProjectForm() {
	const { data } = useQuery(GET_CLIENTS);

	const [formData, setFormData] = useState({
		name: '',
		description: '',
		status: 'new',
		clientId: '',
	});

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		setFormData({
			name: '',
			description: '',
			status: 'new',
			clientId: '',
		});
	};

	return (
		<div className='addProjectForm-container'>
			<button className='button-addProject' onClick={handleSubmit}>
				Add Project
			</button>

			<form className='addProject-form'>
				<div className='label-input'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						onChange={handleChange}
						value={formData.name}
					/>
				</div>

				<div className='label-input'>
					<label htmlFor='description'>Description</label>
					<textarea
						type='text'
						name='description'
						onChange={handleChange}
						value={formData.description}
					/>
				</div>

				<div className='label-input'>
					<label htmlFor='client'>Client</label>
					<select
						name='clientId'
						value={formData.clientId}
						onChange={handleChange}
					>
						<option value=''>Choose</option>
						{data?.getAllClients?.map((client) => {
							return (
								<option value={client.id} key={client.id}>
									{client.name}
								</option>
							);
						})}
					</select>
				</div>

				<div className='label-input'>
					<label htmlFor='status'>Status</label>
					<select name='status' onChange={handleChange} value={formData.status}>
						<option value='new'>Not Started</option>
						<option value='progress'>In Progress</option>
						<option value='completed'>Completed</option>
					</select>
				</div>
			</form>
		</div>
	);
}
