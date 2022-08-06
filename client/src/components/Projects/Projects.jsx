import './Projects.css';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../../queries/projectQueries';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
	const navigate = useNavigate();
	const { data, loading, error } = useQuery(GET_PROJECTS);
	if (loading) return <div>Loading...</div>;
	else if (error) return <div>{error}</div>;
	else if (!loading && !error) {
		function routingFunction(e, id) {
			e.preventDefault();
			navigate(`project/${id}`);
		}

		return (
			<div className='container'>
				{data.getAllProjects.map((project) => {
					return (
						<div
							className='card'
							onClick={(e) => routingFunction(e, project.id)}
						>
							<span>
								<span className='project-name'>{project.name}</span>
							</span>
							<br />
							<p className='project-status'>{project.status}</p>
						</div>
					);
				})}
			</div>
		);
	}
}
