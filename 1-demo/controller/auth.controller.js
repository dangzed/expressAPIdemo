const db = require('../db')
const md5 = require('md5')

module.exports.getLogin = (req, res) => {
    res.render('login')
}

module.exports.postLogin = (req, res) => {
    let email = req.body.email
    let hashedPassword = md5(req.body.password)
    let user = db.get("users").find({email: email}).value()
    if (!user) {
        res.render('login')
        console.log('No user found')
        return;
    }
    if (user.password !== hashedPassword) {
        res.render('login')
        console.log('Password not match')
        return;
    }

    res.cookie('userId', user.id, {
        signed: true
    })
    res.redirect('/users')
}

module.exports.logout = (req, res) => {
    res.clearCookie('userId')
    res.redirect('/')
}