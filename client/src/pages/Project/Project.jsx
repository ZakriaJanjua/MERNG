import './Project.css';
import EditProjectForm from '../../components/EditProjectForm/EditProjectForm';
import { useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_PROJECTS, GET_SINGLE_PROJECT } from '../../queries/projectQueries';
import { Fragment } from 'react';
import { useMutation } from '@apollo/client';
import { DELTE_PROJECT } from '../../mutations/projectMutations';

const Project = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { data, loading, error } = useQuery(GET_SINGLE_PROJECT, {
		variables: { id },
	});
	const [deleteProject] = useMutation(DELTE_PROJECT);

	const handleClick = (e) => {
		e.preventDefault();
		deleteProject({
			variables: {
				id,
			},
			onCompleted: () => navigate('/'),
			refetchQueries: [{ query: GET_PROJECTS }],
		});
	};

	if (loading) return <div>Loading...</div>;
	else if (error) return <div>Error :(</div>;
	else if (data) {
		return (
			<Fragment>
				<button className='delete-project' onClick={handleClick}>
					Delete Project
				</button>
				<div className='project-container'>
					<h3 className='project-heading'>{data?.getProject?.name}</h3>
					<p className='project-description'>{data?.getProject?.description}</p>
					<p className='project-status-single'>{data?.getProject?.status}</p>
					<hr />
					<h3 className='client-details-heading'>Client Details:</h3>
					<p className='client-details'>{data?.getProject?.client?.name}</p>
					<p className='client-details'>{data?.getProject?.client?.email}</p>
					<p className='client-details'>{data?.getProject?.client?.phone}</p>
					<hr className='bottom-border' />
					<h2>Edit Project Form</h2>
					<EditProjectForm />
				</div>
			</Fragment>
		);
	}
};

export default Project;
