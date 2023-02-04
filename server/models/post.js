const mongoose = require("mongoose");
const {Schema} = mongoose

const PostSchema = new mongoose.Schema({
    content : {
        type : String,
    },
    tag : {
        type : String,
    },
    hoursAgo : {
        type : Number 
    }
})

module.exports = Post = mongoose.model('post', PostSchema);