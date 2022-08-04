import { Fragment } from 'react';
import AddClientForm from '../../components/AddClientForm/AddClientForm';
import Clients from '../../components/Clients/Clients';
import Projects from '../../components/Projects/Projects';

export default function Home() {
	return (
		<Fragment>
			<AddClientForm />
			<Clients />
			<Projects />
		</Fragment>
	);
}
