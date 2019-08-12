import expressGraphql from 'express-graphql';

import resolvers from './resolvers';
import schema from './schema';

export default expressGraphql({
	schema,
	rootValue: resolvers,
	graphiql: process.env.NODE_ENV !== 'production'
});
