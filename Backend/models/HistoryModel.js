const mongoose = require('mongoose')

const historySchema = new mongoose.Schema({
    auth0Id: { type: String, required: true },
    action: { type: String, default: 'Downloaded PDF' },
    timestamp: { type: Date, default: Date.now }
})

const history = mongoose.model("History", historySchema)

module.exports = history