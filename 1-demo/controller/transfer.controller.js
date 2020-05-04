const shortId = require('shortid')
const db = require('../db')

module.exports.getCreate = (req, res, next) => {
    res.render('transfer',{
        csrfToken: req.csrfToken
    })
}

module.exports.postCreate = (req, res) => {
    let data={
        id: shortId.generate(),
        account: req.body.account,
        amount: parseInt(req.body.amount),
        userId: req.signedCookies.userId
    }
    db.get("transfers").push(data).write()
    res.redirect('/transfer/create')
}