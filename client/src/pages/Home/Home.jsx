import { Fragment } from 'react';
import AddClientForm from '../../components/AddClientForm/AddClientForm';
import Clients from '../../components/Clients/Clients';
import Header from '../../components/Header/Header';
import Projects from '../../components/Projects/Projects';

export default function Home() {
	return (
		<Fragment>
			<Header />
			<AddClientForm />
			<Clients />
			<Projects />
		</Fragment>
	);
}
