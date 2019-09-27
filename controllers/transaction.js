
module.exports = {
    handleTransaction: async (transaction) => {
        let sourceUser = await User.find({'_id': transaction.sourceUserId })
        let targetUser = await User.find({'_id': transaction.targetUserId })

        let sourceUserFunds = sourceUser.funds.amount
        let sourceUserCurrecny =sourceUser.funds.currency

        let targetUserFunds = targetUser.funds.amount

        //Check if source usr has enough funds and currency type
        if(sourceUserCurrency === request.sourceUser.currency && amount <= sourceUserFunds){
            //Substract amount from sourceUser according to currency
            //update source user info
            // check if target user has currency
            //if it has that currency add it to amount
            //else add object with new currency to target user
            //save target user info with new values
            transaction.processed = Date.now().toLocaleString()
            transaction.state('Completed')
            await transaction.save().then(transaction =>{
                res.send(transaction)
            })
        }else {
            transaction.state('Canceled')
            await transaction.save().then(transaction =>{
                res.send('not enough funds, transaction canceled', transaction)
            })
        }
    }
}
