const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {createTweet, deleteTweet} = require('../controllers/tweetController')

router.route('/tweet')
.post(protect, createTweet)

router.route('/tweet/:id')
.delete(protect, deleteTweet)


module.exports = router