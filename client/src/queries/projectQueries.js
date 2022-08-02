import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
	query getAllProjects {
		getAllProjects {
         name
         status
		}
	}
`;
