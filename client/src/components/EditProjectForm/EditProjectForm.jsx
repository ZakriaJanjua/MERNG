import './EditProjectForm.css';

export default function EditProjectForm() {
	return (
		<form>
			<div>
				<label htmlFor=''>Name</label>
				<br />
				<input type='text' />
			</div>
			<br />
			<div>
				<label htmlFor=''>Description</label>
				<br />
				<input type='text' />
			</div>
			<br />
			<div>
				<label htmlFor=''>Status</label>
				<br />
				<input type='text' className='input' />
			</div>
		</form>
	);
}
