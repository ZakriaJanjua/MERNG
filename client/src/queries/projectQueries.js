import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
	query getAllProjects {
		getAllProjects {
			name
			status
		}
	}
`;

export const GET_SINGLE_PROJECT = gql`
	query getProject($id: ID!) {
		getProject(id: $id) {
			name
			description
			status
			client {
				name
				email
				phone
			}
		}
	}
`;
