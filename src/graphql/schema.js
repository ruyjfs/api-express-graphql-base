import { buildSchema } from 'graphql';
const typeDefs = /* GraphQL */ `
	type User {
		_id: ID
		username: String
		password: String
		name: String
		lastName: String
		dateBirth: String
		createdAt: String
		updatedAt: String
	}

	type Query { 
		user(_id: ID!): User
		users(
			_id: ID
			username: String
			password: String
			name: String
			lastName: String
			dateBirth: String
			createdAt: String
			updatedAt: String
		): [User]
	}

	type Mutation {
		createUser(
			_id: ID
			username: String!
			password: String!
			name: String!
			lastName: String!
			dateBirth: String
			createdAt: String
			updatedAt: String
		): User
		updateUser(
			_id: ID!
			username: String
			password: String
			name: String
			lastName: String
			dateBirth: String
			createdAt: String
			updatedAt: String
		): User
	}
`;

export default buildSchema(typeDefs);
