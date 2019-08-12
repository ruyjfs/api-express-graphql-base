const mongoose = require('mongoose');
let dbConnection = mongoose.connect('mongodb://@db:27017/local', {
	useNewUrlParser: true,
	auth: { authSource: 'admin' },
	user: 'expressjs',
	pass: 'expressjs'
});
dbConnection = mongoose.connection;
dbConnection.on('error', () => {
	console.log('---FAILED to connect to mongoose');
});
dbConnection.once('open', () => {
	console.log('+++Connected to mongoose');
});

const Schema = mongoose.Schema;
const Types = mongoose.Types;

module.exports = { dbConnection, Schema, Types };
