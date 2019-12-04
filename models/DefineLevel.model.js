const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const defineLevelSchema = new Schema({
    label: {
        type: String
    },
    fluel: {
        type: String
    },
    define1: {
        type: String
    },
    define2: {
        type: String
    }
});

const DefineLevel = mongoose.model('DefineLevel', defineLevelSchema);

module.exports = DefineLevel