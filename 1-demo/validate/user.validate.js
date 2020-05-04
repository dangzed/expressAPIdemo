module.exports.postCreate = (req, res, next) => {
    if (!req.body.name || !req.body.phone) {
        res.send('Name or phone missing !')
    }else next();
}