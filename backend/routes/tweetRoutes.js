const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {createTweet, deleteTweet, getSingleTweet, getUserTweets, getFollowedTweets} = require('../controllers/tweetController')

router.route('/tweet')
.post(protect, createTweet)

router.route('/tweet/:id')
.delete(protect, deleteTweet)

router.route('/home')
.get(getFollowedTweets)

router.route('/:userName/:id') 
.get(getSingleTweet)

router.route('/:userName/')
.get(getUserTweets)






module.exports = router