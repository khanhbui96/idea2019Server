const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const driverSchema = new Schema({
    level: {
        type: String
    },
    academic: {
        type: String
    },
    name: {
        type: String
    },
    birthday: {
        type: String
    },
    start: {
        type: String
    },
    number: {
        type: String
    },
    end: {
        type: String
    },
    rank: {
        type: String
    },
    position: {
        type: String
    },
    unit: {
        type: String
    },
    salary: {
        type: String
    },
    salaryReceive: {
        type: String
    },
    registArea:{
        type: String
    },
    degree: {
        type: String
    },
    uses: {
        type: String
    },
    dateReceive: {
        type: String
    },
    base64: {
        type: String
    }
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver