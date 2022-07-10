const asyncHandler = require('express-async-handler')
const Tweet = require('../models/tweetModel')
const { populate } = require('../models/userModel')
const User = require('../models/userModel')


//@desc Get all tweets from one user
//@route POST /tweet/
const createTweet = asyncHandler(async (req, res) => {
    const {userID, message} = req.body
    

    //Check for required fields
    if(!message || message.length === 0){
        throw new Error('You cannot post a blank tweet')
    }

    const user = await User.findById(userID).select(['-password', '-email'])


    if(!user){
        throw new Error('User not found')
    }

    const tweet = await Tweet.create({
        user: {
            userID: user._id,
            userName: user.userName,
            displayName: user.displayName
        },
        message,
        likes: 0,
    })

    tweet.tweetURL = `/${user.userName}/status/${tweet._id}`
    await tweet.save()

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



//@desc Get all tweets from one user (For profile pages)
//@route GET /:userName/
const getUserTweets = async (req, res) => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    try {
        const tweets = await Tweet.find({"user.userName": req.params.userName})
        
        if(tweets.length === 0){
            res.json(null)
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
    const tweetID = req.params.id

    try {
        const tweet = await Tweet.findById(tweetID)
       
        if(!tweet){
            res.json(null)
        } else {
            res.json(tweet)
        }

    } catch (error) {
        console.log(error)
    }

}

//@desc Get tweets from accounts the user follows
//@route GET /home
const getFollowedTweets = async (req, res) => {

    const userName = req.params.userName
    
    try {
        const user = await User.findOne({userName: userName}).select(['-password', '-email'])

        if(!user){

            throw new Error('User does not exist')
        }



        const tweets = await Tweet.find({user: {$in:user.following}})
        
        console.log(tweets)
        console.log(tweets.length)
        if(tweets.length === 0){
            res.json(null)
        } else {
            res.json(tweets)
        }

    } catch (error) {
        console.log(error)
    }


}


//@desc Like a tweet
//@route GET /:userName/:id/like
const likeTweet = async (req, res) => {
    console.log(req)
    res.send('asdasd')


}



module.exports = {
    createTweet,
    deleteTweet,
    getUserTweets,
    getSingleTweet,
    getFollowedTweets,
    likeTweet
}