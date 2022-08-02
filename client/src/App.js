import { Fragment } from 'react';
import Header from './components/Header/Header';
import Client from './components/Client/Client';
import Project from './components/Project/Project';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AddClientForm from './components/AddClientForm/AddClientForm';

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				getAllClients: {
					merge(existing, incoming) {
						return incoming;
					},
				},
				getAllProjects: {
					merge(existing, incoming) {
						return incoming;
					},
				},
			},
		},
	},
});

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	cache,
});

function App() {
	return (
		<Fragment>
			<ApolloProvider client={client}>
				<Header />
				<AddClientForm />
				<Client />
				<Project />
			</ApolloProvider>
		</Fragment>
	);
}

export default App;
