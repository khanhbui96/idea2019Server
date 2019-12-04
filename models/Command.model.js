const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commandLevelSchema = new Schema({
    base: {
        type: String
    },
    status:{
        type: Boolean
    },
    userId:{
        type: String
    },
    use: {
        type: String
    },
    brand: {
        type: String
    },
    unit: {
        type: String
    },
    license: {
        type: String
    },
    doing: {
        type: String
    },
    user1: {
        type: String
    }, 
    amount: {
        type: String
    }, 
    from: {
        type: String
    }, 
    to: {
        type: String
    },
    distance: {
        type: String
    },
    times: {
        type: String
    }, 
    from2: {
        type: String
    },
    to2: {
        type: String
    },
    distance2: {
        type: String
    },
    co: {
        type: String
    },
    user2: {
        type: String
    },
    amount2: {
        type: String
    },
    times2: {
        type: String
    },
    time: {
        type: String
    },
    place: {
        type: String
    },
    result: {
        type: String
    },
    fuel: {
        type: String
    },
    pay: {
        type: String
    }
});

const Command = mongoose.model('Command', commandLevelSchema);

module.exports = Command