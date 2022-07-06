const asyncHandler = require('express-async-handler')
const Tweet = require('../models/tweetModel')
const User = require('../models/userModel')


//@desc Get all tweets from one user
//@route POST /tweet/
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
        user: user._id,
        userName: user.userName,
        message,
        likes: 0
    })

    res.json(tweet)
    
    
})


//@desc Delete single tweet
//@route DELETE /tweet/:id
const deleteTweet = asyncHandler(async (req, res) => {
    const tweetID = req.params.id
    console.log(tweetID)
    

    
    const tweet = await Tweet.findByIdAndDelete(tweetID)

    if(!tweet){
        throw new Error('Tweet does not exist')
    }

    

    res.json(tweet)
    
    
})



//@desc Get all tweets from one user
//@route GET /:userName/
const getUserTweets = async (req, res) => {
    const userName = req.params.userName
    
    try {
        const user = await User.findOne({userName: userName}).select(['-password', '-email'])

        if(!user){
            throw new Error('User does not exist')
        }

        const tweets = await Tweet.find({user: user._id})
        
        if(tweets.length === 0){
            res.send('No tweets to show')
        } else {
            res.json(tweets)
        }

    } catch (error) {
        console.log(error)
    }

}


//@desc Get single tweet
//@route GET /:userName/:id
const getSingleTweet = async (req, res) => {
    const userName = req.params.userName
    const tweetID = req.params.id

    try {

        const user = await User.find({userName: userName})

        if(!user){
            throw new Error('User does not exist')
        }
        
        const tweet = await Tweet.findById({_id: tweetID})
       

        if(!tweet){
            res.send('Tweet does not exist')
        } else {
            res.json(tweet)
        }

    } catch (error) {
        console.log(error)
    }

}


const getFollowedTweets = async (req, res) => {

    const userID = req.params.id
    
    try {
        const user = await User.findOne({userName: userName}).select(['-password', '-email'])

        if(!user){
            throw new Error('User does not exist')
        }



        const tweets = await Tweet.find({user: {$in:user.following}})
        
        if(tweets.length === 0){
            res.send('No tweets to show')
        } else {
            res.json(tweets)
        }

    } catch (error) {
        console.log(error)
    }


}

const likeTweet = async (req, res) => {
    console.log(req)


}



module.exports = {
    createTweet,
    deleteTweet,
    getUserTweets,
    getSingleTweet,
    getFollowedTweets,
    likeTweet
}