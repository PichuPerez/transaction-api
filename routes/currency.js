const Currency = require('../models/currency')

module.exports = router => {
    router.get('/currency', (req,res) =>{
        Currency.find().then(currency => {
            res.send(currency)
        }).catch(err =>{
            res.send(err)
        })
    })

    router.post('/currency/new', (req, res) => {
        let request = req.body
        let currency = new Currency

        currency.name = request.name
        currency.prefix = request.prefix

        currency.save().then(currency => {
            res.send(currency)
        }).catch(err =>{
            res.send(err)
        })
    })
}
