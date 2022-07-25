const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {createTweet, deleteTweet, getSingleTweet, getUserTweets, getFollowedTweets, likeTweet} = require('../controllers/tweetController')

router.route('/tweet')
.post(protect, createTweet)

router.route('/:username/status/:id/delete')
.delete(protect, deleteTweet)

router.route('/:userName/status/:tweetID/like')
.post(protect, likeTweet)

router.route('/home/:id')
.get(protect, getFollowedTweets)

router.route('/:userName/status/:tweetID') 
.get(getSingleTweet)



router.route('/:userName/tweets')
.get(getUserTweets)






module.exports = router