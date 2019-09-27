const User = require('../models/user')

module.exports = router => {
    // GET users listing
    router.get('/users', function(req, res) {
        User.find().then(users => {
            res.send(users)
        }).catch(err =>{
            res.send(err)
        })
    })
    // Create new User
    router.post('/users', function(req, res) {
      let user = new User
      let request = req.body

        user.name = request.name
        user.email = request.email
        user.description = request.description
        user.maxAmount = request.maxAmount
        user.bitCoinId = (Math.random()*1000000).toFixed(0)

        user.save().then(user =>{
            res.send(user)
        }).catch(err =>{
            res.send(err)
        })

    })
}
