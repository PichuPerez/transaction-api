const Transaction = require('../models/transaction')
const User = require('../models/user')
const Currency = require('../models/currency')
const controller = require('../controllers/transaction')

module.exports = router => {
    //Get All transactions
    router.get('/transactions', (req, res) => {
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
        let currency = JSON.parse(request.currency)

        let createTransaction = false

        let sourceUser = JSON.parse(request.sourceUser)
        let targetUser = JSON.parse(request.targetUser)

        transaction.amount = amount
        transaction.currency = currency

        transaction.sourceUserId = sourceUser._id
        transaction.sourceUserName = sourceUser.name
        transaction.targetUserId = targetUser._id
        transaction.targetUserName = targetUser.name
        transaction.created = Date.now()
        transaction.state = 'IN PROCESS'

        transaction.save().then(transaction => {
            controller.handleTransaction(transaction)
            res.send(transaction)
        }).catch(err => {
            res.send(err)
        })
    })
}
