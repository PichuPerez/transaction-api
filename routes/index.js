const users = require('./users')
const transaction = require('./transaction')
const currency = require('./currency')

module.exports = (router) => {
    users(router)
    currency(router)
    transaction(router)
    return router
};
