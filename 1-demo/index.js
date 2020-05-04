const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const csurf = require('csurf')

const userRoute = require('./routes/user.route')
const authRoute = require('./routes/auth.route')
const authMiddleware = require('./middlewares/auth.middleware')
const transferRoute = require('./routes/transfer.route')

const app = express();

app.set('view engine', 'pug')
app.set('views', './views')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser('best zed in the world'))

app.use('/users', authMiddleware.requireAuth, userRoute)
app.use('/auth', authRoute)
app.use('/transfer', authMiddleware.requireAuth, transferRoute)
app.get('/', (req, res) => {
    res.render('home')
})
app.use(csurf({cookie: true}))
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});