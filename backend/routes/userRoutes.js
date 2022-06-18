const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require('../controllers/userController')
const {validatePassword} = require('../middleware/registerMiddleware')


router.route('/register') 
.post(validatePassword, registerUser)

router.route('/login') 
.post(loginUser)

router.use('/logout', (req, res) => {
    res.send('this page will log you out')
})


router.get('/:userName', (req, res) => {
    res.send('asdasd')
})


module.exports = router