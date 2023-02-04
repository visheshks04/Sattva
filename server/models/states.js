const mongoose = require('mongoose');

const StatesScehma = new mongoose.Schema({
    joy : {
        type : Number,
        default : 0,
    },
    love : {
        type : Number,
        default : 0,
    },
    sadness : {
        type : Number,
        default : 0,
    },
    anger : {
        type : Number,
        default : 0,
    },
    fear : {
        type : Number,
        default : 0,
    },
    surprise : {
        type : Number,
        default : 0,
    },
    date : {
        type: String,
        default : Date.now,
    },
})

module.exports = State = mongoose.model('state', StatesScehma)
