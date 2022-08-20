import './EditProjectForm.css';

export default function EditProjectForm({ projectData }) {
	const findValue = (status) => {
		if (status === 'Not Started') {
			return 'new'
		} else if (status === 'In Progress') {
			return 'progress'
		} else if (status === 'Completed') {
			return 'completed'
		} else {
			return status
		}
	}
	return (
		<form>
			<div>
				<label htmlFor='name'>Name</label>
				<br />
				<input type='text' name='name' value={projectData.name}/>
			</div>
			<br />
			<div>
				<label htmlFor='description'>Description</label>
				<br />
				<input type='text' name='description' value={projectData.description}/>
			</div>
			<br />
			<div>
				<label htmlFor=''>Status</label>
				<br />
				<select name='status' value={findValue(projectData.status)}>
					<option value='new'>Not Started</option>
					<option value='progress'>In Progress</option>
					<option value='completed'>Completed</option>
				</select>
			</div>
		</form>
	);
}
