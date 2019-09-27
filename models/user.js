const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    maxAmount: {
        type: Number,
        required: true
    },
    transactions: {
        type: Array
    },
    bitCoinId: {
        type: Number,
        required: true
    },
    funds: {
        type: Object,
        required: true
    }
})

let User = mongoose.model('user', UserSchema)
module.exports = User
