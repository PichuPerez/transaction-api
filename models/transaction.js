const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: Object,
        required: true
    },
    sourceUserName:{
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
    targetUserName:{
        type: String,
        required: true
    },
    created: {
        type: Date
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
