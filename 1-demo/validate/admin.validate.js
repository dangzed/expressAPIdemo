const db= require('../db')
module.exports.validate = (req, res, next) => {
    let adminId= db.get('users').find({email:'dangyeuzed@gmail.com'}).value().id
    if(req.signedCookies.userId !== adminId){
        res.send('You dont have permission to do this action')
    }else next()
}