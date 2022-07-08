const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {createTweet, deleteTweet, getSingleTweet, getUserTweets, getFollowedTweets, likeTweet} = require('../controllers/tweetController')

router.route('/tweet')
.post(protect, createTweet)

router.route('/:username/:id/delete')
.delete(protect, deleteTweet)

router.route('/:userName/:id/like')
.post(likeTweet)

router.route('/home')
.get(getFollowedTweets)

router.route('/:userName/:id') 
.get(getSingleTweet)



router.route('/:userName')
.get(getUserTweets)






module.exports = router