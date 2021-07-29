const seeder = require("mongoose-seeder");

const db = 'mongodb+srv://Veritas:Nemesis@nemesis-db.owvgs.mongodb.net/Nemesis-db?retryWrites=true&w=majority';

data = require('./data.json');
// seeder.connect(db, function () {
//     seeder.loadModels(['../models/location']);
//     seeder.clearModels(['location']);
//     seeder.populateModels(data, function (err, done) {
//         if (err) {
//             return console.log("seed error", err);
//         }
//         if (done) {
//             return console.log("seed done", done);
//         }
//         seeder.disconnect();
//     });
// });


// Drop the entire database (default behaviour)
seeder.seed(data, {dropDatabase: false}).then(function(dbData) {
    // ...
}).catch(function(err) {
    // handle error
});