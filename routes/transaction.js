const Transaction = require('../models/transaction')
const User = require('../models/user')
const Currency = require('../models/currency')
const controller = require('../controllers/transaction')

module.exports = router => {
    //Get All transactions
    router.get('/transaction', (req, res) => {
        console.log('finding transactions')
        Transaction.find().then(transactions => {
            res.send(transactions)
        }).catch(err => {
            res.send(err)
        })
    })

    //Create new transaction
    router.post('/transaction/new', async (req, res) => {
        let request = req.body
        let transaction = new Transaction

        let amount = request.amount
        let currency = request.currency

        let createTransaction = false

        transaction.amount = amount
        transaction.currency = currency
        transaction.sourceUserId = request.sourceUser._id
        transaction.targetUserId = request.targetUser._id
        transaction.created = Date.now().toLocaleString()
        transaction.state = 'In process'

        transaction.save().then(transaction => {
            controller.handleTransaction(transaction)
            res.send(transaction)
        }).catch(err => {
            res.send(err)
        })
    })
}
