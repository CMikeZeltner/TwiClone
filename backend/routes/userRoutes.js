const express = require('express')
const router = express.Router()
const {registerUser, loginUser, logoutUser, test} = require('../controllers/userController')
const {validatePassword} = require('../middleware/registerMiddleware')


router.route('/register') 
.post(validatePassword, registerUser)

router.route('/login') 
.post(loginUser)

router.route('/logout')
.post(logoutUser)

router.route('/test')
.get(test)


router.get('/:userName', (req, res) => {
    res.send('asdasd')
})


module.exports = router