const connectionString = 'mongodb+srv://Veritas:Nemesis@nemesis-db.owvgs.mongodb.net/Nemesis-db?retryWrites=true&w=majority';

const mongoose = require('mongoose');

const db = mongoose.connection;
const configs = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};

mongoose
	.connect(connectionString, configs)
	.then(() =>
		console.log(
			`Nemesis access granted at ${db.host}:${db.port}.`
		)
	)
	.catch((err) => console.log(`MongoDB connection FAILED :( Error: ${err}`));

