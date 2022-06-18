const asyncHandler = require('express-async-handler')
const Tweet = require('../models/tweetModel')
const User = require('../models/userModel')



const sendTweet = asyncHandler(async (req, res) => {

})


module.exports = {
    sendTweet,
}