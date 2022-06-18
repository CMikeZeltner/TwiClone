const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require('../controllers/userController')
const {validatePassword} = require('../middleware/registerMiddleware')


router.route('/register') 
.get((req, res) => { res.send('This will be the register page')})
.post(validatePassword, registerUser)

router.route('/login') 
.get((req, res) => { res.send('This will be the login page')})
.post(loginUser, () => {
    
})

router.use('/logout', (req, res) => {
    res.send('this page will log you out')
})


router.get('/:userName', (req, res) => {
    res.send('asdasd')
})


module.exports = router