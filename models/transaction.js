const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    sourceUserId: {
        type: String,
        required: true
    },
    targetUserId: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    processed: {
        type: Date
    },
    state: {
        type: String,
        default: 'In process'
    }

})

let Transaction = mongoose.model('transaction', TransactionSchema)
module.exports = Transaction
