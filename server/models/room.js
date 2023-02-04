const mongoose = require("mongoose");
const {Schema} = mongoose

const RoomSchema = new mongoose.Schema({
    tag : {
        type : String,
    },
    token : {
        type : String,
    }
})

module.exports = Room = mongoose.model('room', RoomSchema);