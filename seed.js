const seeder = require("mongoose-seed");

const db = 'mongodb+srv://Veritas:Nemesis@nemesis-db.owvgs.mongodb.net/Nemesis-db?retryWrites=true&w=majority';

// data = require('./data.json');

const data = [
    {
        'model' : 'Location',
        'documents' : [
            {
                "_id": "6102027b1501296d297ddf8e",
                "post": "PH INFO",
                "name": "PH NAME"
            },
            {
                "_id": "6102027b1501296d297ddf8f",
                "post": "PH INFO 2",
                "name": "PH NAME 2"
            }
        ]
    }
];

seeder.connect(db, function () {
    seeder.loadModels(['./models/location']);
    // seeder.clearModels(['locations']);
    seeder.populateModels(data, function (err, done) {
        if (err) {
            return console.log("seed error", err);
        }
        if (done) {
            return console.log("seed done", done);
        }
        seeder.disconnect();
    });
});


// Drop the collection
// seeder.seed(data, {dropCollections: true}).then(function(dbData) {
//     // ...
// }).catch(function(err) {
//     // handle error
// });