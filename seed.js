const seeder = require("mongoose-seed");

const db = 'mongodb+srv://Veritas:Nemesis@nemesis-db.owvgs.mongodb.net/Nemesis-db?retryWrites=true&w=majority';

// data = require('./data.json');

const data = [
    {
        'model' : 'Location',
        'documents' : [
            {
                "_id": "61030114814fff5e2a08e671",
                "post": "An Earth-like planet, Nemesis Prime is home to most who hail from the Nemesis Tessera system. It's surface is covered by great cities whose towers reach into the lower layers of space, and whose factories extend deep into the planet's crust.",
                "name": "Nemesis Prime"
            },
            {
                "_id": "61030114814fff5e2a08e672",
                "post": "A large space station on an eliptical orbit around Nemesis Prime, Legionnaire is the system's main port and shipyard, offering high pay and benefits to those who brave the void of space in company-issued suits to repair and service the many ships that come through the system.",
                "name": "OCP-Legionnaire"
            },
            {
                "_id": "61030114814fff5e2a08e673",
                "post": "Forgeworld Vulcario is one of the leading manufacturers of Mechanized Combat Heavy Armor, or MeCHA, in the sector. Great foundries pull the molten core of the planet to the surface to heat the city-sized forges that produce these machines, meant for use on the spinward front in the war against Terra Nobilis. All who work on Vulcario spend their entire lives in the heat of the planet's industry, from the day they are old enough to stand to the day they die, supplying the god-engines and other war machines the Nemesis Tessera system uses.",
                "name": "Vulcario"

            },
            {
                "_id": "61030114814fff5e2a08e674",
                "post": "Nemesis Secundus is primarily an agricultural world, allowing the continued operation of the forges of Vulcario, and the continued existence of Nemesis Prime's hive cities, through the cultivation and distribution of hundereds of thousands of different food products, ranging from cricket steaks to modified wheat paste. Secundus also provides the majority of medicinal aid to Vulcario and Prime, meaning that if Secundus were to fall, The entire Nemesis Tessera system would soon follow.",
                "name": "Nemesis Secundus"
            },
            {
                "_id": "61030114814fff5e2a08e675",
                "post": "The fortress Monastary Testudo, Home to the warrior monks of Tessera, Lies somewhere within the asteroid belt at the edge of the system. Not much is known about the fortress, nor those that dwell within, save that they alone are responsible for the safety of the Nemesis Tessera system.",
                "name": "Testudo"
            }
        ]
    }
];

seeder.connect(db, function () {
    seeder.loadModels(['./models/location']);
    seeder.clearModels(['Locations']);
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


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');


const locationSchema = new Schema({
    post: {type: String, required: true},
    name: {type: String},
    comment: {type: Schema.Types.ObjectId, ref: "Comment"},
    event: {type: Schema.Types.ObjectId, ref: 'Event'}
});

const Location = mongoose.model('Location', locationSchema, "Locations")
module.exports = Location;
locationSchema.plugin(uniqueValidator);

// Drop the collection
// seeder.seed(data, {dropCollections: true}).then(function(dbData) {
//     // ...
// }).catch(function(err) {
//     // handle error
// });