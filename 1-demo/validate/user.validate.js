module.exports.postCreate = (req, res, next) => {
    if (!req.body.name || !req.body.phone || !req.body.email || !req.body.password ) {
        res.send('Information missing !')
    }else next();
}