const connectionString = 'mongodb+srv://Veritas:<Nemesis>@nemesis-db.owvgs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

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
	.then(() => console.log("MongoDB successfully connected!"))
	.connect(process.env.DATABASE_URL || connectionString, configs)
	.then(() =>
		console.log(
			`MongoDB successfully connected at ${db.host}:${db.port}! How dope!`
		)
	)
	.catch((err) => console.log(`MongoDB connection FAILED :( Error: ${err}`));












// mongoose.connect(connectionString, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
// })
// .then()

// const db = mongoose.connection;

// // db.on('connected', function() {
// //     console.log(`Nemesis database connected and active at ${db.host}:${db.port}`);
// // });