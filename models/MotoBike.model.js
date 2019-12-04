const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const motoBikeSchema = new Schema({
    name: {
        type: String
    },
    userId:{
        type: String
    },
    address: {
        type: String
    },
    unit: {
        type: String
    },
    type:{
        type: String
    },
    model: {
        type: String
    },
    color: {
        type: String
    },
    license: {
        type: String
    },
    duration: {
        type: String
    }
});

const MotoBike = mongoose.model('MotoBike', motoBikeSchema);

module.exports = MotoBike