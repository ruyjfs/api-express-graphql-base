import express from 'express';

import routes from './routes';

let app = express();

app.use(routes);

const port = process.env.PORT || 4000;

app.listen(port, console.log(`Running a GraphQL API server at localhost:${port}/graphql`));
