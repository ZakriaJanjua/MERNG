import { Fragment } from 'react';
import Header from './components/Header/Header';
import Client from './components/Client/Client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

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
				<Client />
			</ApolloProvider>
		</Fragment>
	);
}

export default App;
