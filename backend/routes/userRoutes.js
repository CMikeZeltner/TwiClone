const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require('../controllers/userController')
const {validatePassword} = require('../middleware/registerMiddleware')




router.route('/register') 
.post(validatePassword, registerUser)

router.route('/login') 
.post(loginUser)

const tweetRouter = require('./tweetRoutes')
router.use('/', tweetRouter)



module.exports = router