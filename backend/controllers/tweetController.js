const asyncHandler = require('express-async-handler')
const Tweet = require('../models/tweetModel')
const User = require('../models/userModel')


const createTweet = asyncHandler(async (req, res) => {
    const {message} = req.body
    

    //Check for required fields
    if(!message || message.length === 0){
        throw new Error('You cannot post a blank tweet')
    }

    const user = await User.findById(req.user.id)

    if(!user){
        throw new Error('User not found')
    }

    const tweet = await Tweet.create({
        user,
        message,
        likes: 0
    })

    res.json(tweet)
    
    
})


module.exports = {
    createTweet
}