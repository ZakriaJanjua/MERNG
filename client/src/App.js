import { Fragment } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Header from './components/Header/Header'
import NotFound from './pages/Not Found/NotFound';
import Project from './pages/Project/Project';
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
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />}/>
						<Route path='*' element={<NotFound />}/>
						<Route path='/project/:id' element={<Project />}/>
					</Routes>
				</BrowserRouter>
			</ApolloProvider>
		</Fragment>
	);
}

export default App;
