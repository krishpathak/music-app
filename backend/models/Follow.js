const mongoose = require('mongoose');
const { Schema } = mongoose;

const followSchema = new Schema({
    followerusername: {
        type: String
    },
    followingusername: {
        type: String,
    },
    email: {
        type: String
    }
})

module.exports=mongoose.models.Follow || mongoose.model('Follow',followSchema)