const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    fuel: {
        type: String
    },
    brand: {
        type: String
    },
    number: {
        type: String
    },
    date: {
        type: String
    },
    type: {
        type: String
    },
    sourse: {
        type: String
    },
    productDate: {
        type: String
    },
    startDate: {
        type: String
    },
    limit: {
        type: String
    },
    owned: {
        type: String
    },
    level: {
        type: String
    },
    uses: {
        type: String
    },
    status: {
        type: String
    },
    infor: {
        type: String
    },
    base64: {
        type: String
    },
    chassis: {
        type: String
    },
    engine: {
        type: String
    },
    verify: {
        start: {
            type: String
        },
        end: {
            type: String
        }
    },
    equiments: {
        tires: {
            type: Array
        }, 
        batterys: {
            type: Array
        }
    }

});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle