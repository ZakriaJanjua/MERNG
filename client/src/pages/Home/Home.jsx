import { Fragment } from 'react';
import AddClientForm from '../../components/AddClientForm/AddClientForm';
import Clients from '../../components/Clients/Clients';
import Projects from '../../components/Projects/Projects';
import AddProjectForm from '../../components/AddProjectForm/AddProjectForm';

export default function Home() {
	return (
		<Fragment>
			<AddClientForm />
			<AddProjectForm />
			<Clients />
			<Projects />
		</Fragment>
	);
}
