const mongoose = require('mongoose')
require('./car.model')
require('./user.model')


const rentSchema =  new mongoose.Schema ({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user",
        required: true
    },
    carId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "car",
        required: true
    },
    rentDate: {
        type: Date,
        required: true,
    },
    returnDate: {
        type: Date,
        required: true,
    },
    returned: {
        type: Boolean,
        default: false
    }

})
const rentModel = mongoose.model('rent', rentSchema)
module.exports = rentModel;

