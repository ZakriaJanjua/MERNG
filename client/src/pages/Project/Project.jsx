import './Project.css';
import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { GET_SINGLE_PROJECT } from '../../queries/projectQueries';
import { Fragment } from 'react';

const Project = () => {
	const { id } = useParams();
	const { data, loading, error } = useQuery(GET_SINGLE_PROJECT, {
		variables: { id },
	});
	if (loading) return <div>Loading...</div>;
	else if (error) return <div>Error :(</div>;
	else if (data) {
		return (
			<Fragment>
				<div className='project-container'>
					<h3 className='project-heading'>{data.getProject.name}</h3>
					<p className='project-description'>{data.getProject.description}</p>
					<p className='project-status-single'>{data.getProject.status}</p>
					<hr />
					
				</div>
			</Fragment>
		)
	}
};

export default Project;
