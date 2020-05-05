module.exports.postCreate = (req, res, next) => {
    if(!req.body.name) res.send('Name missing !')
    else if(!req.body.phone) res.send('Phone missing !')
    else if(!req.body.email) res.send('Email missing !')
    else if(!req.body.password) res.send('Password missing !')
    else next();
}