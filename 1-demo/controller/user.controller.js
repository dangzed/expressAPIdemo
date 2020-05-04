const db = require('../db')
const shortId = require('shortid')
const users = db.get("users").value()
const md5 = require('md5')

module.exports.index = (req, res) => {
    res.render('index', {users: users})
}

module.exports.search = (req, res) => {
    let q = req.query.q;
    let matchedUser = users.filter((user) => {
        return user.name.indexOf(q) != -1;
    })
    res.render('index', {users: matchedUser, fixedInput: q})
}

module.exports.getCreate = (req, res) => {
    res.render('create')
}

module.exports.postCreate = (req, res) => {
    req.body.id = shortId.generate()
    //req.body.avatar = req.file.path
    req.body.password = md5(req.body.password)
    db.get("users").push(req.body).write()
    res.redirect('/users')
}

module.exports.view = (req, res) => {
    let id = (req.params.id);
    let user = db.get("users").find({"id": id}).value();
    console.log('User inserted: ')
    console.log(user)
    res.render('view', {user: user});
}

module.exports.delete = (req, res) => {
    db.get('users')
        .remove({"id": req.params.id})
        .write()
    res.redirect('/users')
}

module.exports.getUpdate = (req, res) => {
    res.locals.tempUser = db.get("users").find({"id": req.params.id}).value()
    res.render('update')
}

module.exports.postUpdate = (req, res) => {
    let id = req.params.id
    let hashedPassword= md5(req.body.password)
    db.get('users')
        .find({"id": id})
        .assign({
            "name": req.body.name,
            "phone": req.body.phone,
            "email": req.body.email,
            "password": hashedPassword
        })
        .write()
    res.redirect('/users/'+id)
}
