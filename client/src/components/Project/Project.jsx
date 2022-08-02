import './Project.css';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../../queries/projectQueries';

export default function Project() {
	const { data, loading, error } = useQuery(GET_PROJECTS);
	console.log(data);
	if (loading) return <div>Loading...</div>;
	else if (error) return <div>{error}</div>;
	else if (!loading && !error) {
		return (
			<div className='container'>
				{data.getAllProjects.map((project) => {
					return (
						<div className='card'>
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
