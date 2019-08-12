import express from 'express';
import expressGraphql from './graphql';

const routes = express.Router();

routes.use('/graphql', expressGraphql);
// asd

// catch 404 and forward to error handler
routes.use((req, res, next) => {
	res.status(404).send('Sorry cant find that!');
});

// render the error page
routes.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

export default routes;
