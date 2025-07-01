const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    auth0Id: { type: String, required: true, unique: true },
    name: String,
    email: String,
    picture: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model('User', userSchema)

module.exports = User