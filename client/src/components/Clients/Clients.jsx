import { useQuery, useMutation } from '@apollo/client';
import './Clients.css';
import { GET_CLIENTS } from '../../queries/clientQueries';
import { DELETE_CLIENT } from '../../mutations/clientMutations';
const Clients = () => {
	const { loading, error, data } = useQuery(GET_CLIENTS);
	const [deleteClient] = useMutation(DELETE_CLIENT);

	if (loading) return <p>Loading...</p>;
	else if (error) return <p>Error :(</p>;
	else if (!loading && !error) {
		return (
			<table className='table'>
				<thead className='stretch'>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{data.getAllClients.map((client) => {
						return (
							<tr key={client.id}>
								<td>{client.name}</td>
								<td>{client.email}</td>
								<td>{client.phone}</td>
								<td>
									<button
										className='delete_button'
										onClick={(e) => {
											e.preventDefault();
											deleteClient({
												variables: {
													id: client.id,
												},
												//refetchQueries: [{ query: GET_CLIENTS }],
												update(cache, { data: { deleteClient } }) {
													const { getAllClients } = cache.readQuery({
														query: GET_CLIENTS,
													});
													cache.writeQuery({
														query: GET_CLIENTS,
														data: {
															getAllClients: getAllClients.filter(
																(client) => client.id !== deleteClient.id
															),
														},
													});
												},
											});
										}}
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
};

export default Clients;
