const asyncHandler = require('express-async-handler')
const Tweet = require('../models/tweetModel')
const { populate } = require('../models/userModel')
const User = require('../models/userModel')


//@desc Get all tweets from one user
//@route POST /tweet/
const createTweet = asyncHandler(async (req, res) => {
    const {userID, message} = req.body
    console.log(userID, message)

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
    user.tweetCount += 1
    await user.save()

    res.json(tweet)
})




//@desc Delete single tweet
//@route DELETE /tweet/:id
const deleteTweet = asyncHandler(async (req, res) => {
    const tweetID = req.params.id
    console.log(tweetID)
    
    const tweet = await Tweet.findById(tweetID)

    if(!tweet){
        throw new Error('Tweet does not exist')
    }

    const user = await User.findById(tweet.user.userID)

    
    Tweet.deleteOne(tweetID)
    user.tweetCount -= 1
    await user.save()

    res.json(tweet)
    
    
})



//@desc Get all tweets from one user (For profile pages)
//@route GET /:userName
const getUserTweets = async (req, res) => {
    try {
        const tweets = await Tweet.find({"user.userName": req.params.userName})
        
        if(tweets){
            res.json(tweets)
        } else{
            res.json(null)
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
       
        if(tweet){
            res.json(tweet)
        } else{
            res.json(null)
        }

    } catch (error) {
        console.log(error)
    }

}

//@desc Get tweets from accounts the user follows
//@route GET /home/:id 
const getFollowedTweets = async (req, res) => { 
    try {
        const user = await User.findById(req.params.id).select(['-password', '-email'])

        if(!user){
            throw new Error('User does not exist')
        }


        const tweets = await Tweet.find({'user.userID': {$in:user.following}})

       res.json(tweets)

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