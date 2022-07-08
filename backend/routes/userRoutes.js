const express = require('express')
const router = express.Router()
const {registerUser, loginUser, followUser} = require('../controllers/userController')
const {validatePassword, validateUsername} = require('../middleware/registerMiddleware')




router.route('/register') 
.post(validatePassword, validateUsername, registerUser)

router.route('/login') 
.post(loginUser)

router.route('/:userName/follow')
.post(followUser)

// router.route('/user/:id')
// .get(getTweetUser)

const tweetRouter = require('./tweetRoutes')
router.use('/', tweetRouter)



module.exports = router