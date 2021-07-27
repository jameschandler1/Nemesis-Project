//string for accessing Nemesis database
const connectionString = 'mongodb+srv://Veritas:Nemesis@nemesis-db.owvgs.mongodb.net/Nemesis-db?retryWrites=true&w=majority';

const mongoose = require('mongoose');
// Engages connection to Nemesis
const db = mongoose.connection;
const configs = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};
//logs that Nemesis is properly connected
mongoose
	.connect(connectionString, configs)
	.then(() =>
		console.log(
			`Nemesis access granted at ${db.host}:${db.port}.`
		)
	)
	.catch((err) => console.log(`Nemesis acces denied :( Error: ${err}`));

