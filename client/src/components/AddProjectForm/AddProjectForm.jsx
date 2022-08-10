import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import './AddProjectForm.css';
import { GET_CLIENTS } from '../../queries/clientQueries';
import { GET_PROJECTS } from '../../queries/projectQueries';
import { ADD_PROJECT } from '../../mutations/projectMutations';

export default function AddProjectForm() {
	const { data } = useQuery(GET_CLIENTS);

	const [addProject] = useMutation(ADD_PROJECT);

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
		if (
			formData.name === '' ||
			formData.description === '' ||
			formData.clientId === ''
		) {
			alert('Please fill all fields');
		}
		addProject({
			variables: {
				name: formData.name,
				description: formData.description,
				status: formData.status,
				clientId: formData.clientId,
			},
			update(cache, { data: { addProject } }) {
				const { getAllProjects } = cache.readQuery({
					query: GET_PROJECTS,
				});
				cache.writeQuery({
					query: GET_PROJECTS,
					data: {
						getAllProjects: [...getAllProjects, addProject],
					},
				});
			},
		});
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
