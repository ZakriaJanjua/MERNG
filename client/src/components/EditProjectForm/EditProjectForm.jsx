import './EditProjectForm.css';
import { useState } from 'react';
import { UPDATE_PROJECT } from '../../mutations/projectMutations';
import { GET_SINGLE_PROJECT } from '../../queries/projectQueries';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';

export default function EditProjectForm({ projectData }) {
	const { id } = useParams()
	const findValue = (status) => {
		if (status === 'Not Started') {
			return 'new';
		} else if (status === 'In Progress') {
			return 'progress';
		} else if (status === 'Completed') {
			return 'completed';
		} else {
			return status;
		}
	};
	const [data, setData] = useState({...projectData, status: findValue(projectData.status)});
	const [updateProject] = useMutation(UPDATE_PROJECT, {
		variables: {
			id,
			name: data.name,
			description: data.description,
			status: data.status,
		},
		refetchQueries: [{ query: GET_SINGLE_PROJECT, variables: { id } }],
	});
	
	const handleChange = (e) => {
		setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault()
		updateProject(data.name, data.description, data.status);
	};

	return (
		<form>
			<div>
				<label htmlFor='name'>Name</label>
				<br />
				<input
					type='text'
					name='name'
					value={data.name}
					onChange={handleChange}
				/>
			</div>
			<br />
			<div>
				<label htmlFor='description'>Description</label>
				<br />
				<input
					type='text'
					name='description'
					value={data.description}
					onChange={handleChange}
				/>
			</div>
			<br />
			<div>
				<label htmlFor=''>Status</label>
				<br />
				<select
					name='status'
					value={findValue(data.status)}
					onChange={handleChange}
				>
					<option value='new'>Not Started</option>
					<option value='progress'>In Progress</option>
					<option value='completed'>Completed</option>
				</select>
			</div>
			<button className='editFormButton' onClick={handleSubmit}>
				Submit
			</button>
		</form>
	);
}
