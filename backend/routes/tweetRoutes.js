const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {createTweet} = require('../controllers/tweetController')

router.route('/tweet')
.post(protect, createTweet)



module.exports = router