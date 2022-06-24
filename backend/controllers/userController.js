const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Tweet = require('../models/tweetModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const registerUser = asyncHandler(async (req, res) => {
    const {userName, displayName, email, password} = req.body
    

    //Check for required fields
    if(!userName || !email || !password){
        throw new Error('You must fill out all required fields')
    }


    //Check to see is Username is unique
    const userTaken = await User.findOne({userName})

    if(userTaken){
        res.status(400)
        throw new Error('That username already exists')
    }


    //Check to see if email is unique
    const emailTaken = await User.findOne({email})

    if(userTaken){
        res.status(400)
        throw new Error('That email is already in use')
    }

    const salt = await bcrypt.genSalt(11)
    const hashedPassword = await bcrypt.hash(password, salt)

        //Create user
        const user = await User.create({
            //If name exists, use name, else use the userName
            displayName: displayName === undefined ? userName : displayName,
            userName,
            email,
            password: hashedPassword
        })


    if(user){
        res.status(201).json({
            _id: user._id,
            userName: user.userName,
            displayName: user.displayName,
            email: user.email
        })
    }
    
    
})


const loginUser = asyncHandler(async (req, res, next) => {
    const {email, password} = req.body
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user._id,
            userName: user.userName,
            displayName: user.displayName,
            email: user.email,
            token: generateToken(user._id)
        })
        
    } else {
        throw new Error('Invalid credentials')
    }
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })
}


const getUserTweets = async (req, res) => {
    const userID = req.params.id
    
    try {
        console.log(userID)
        const tweets = await Tweet.find({user: userID})
        console.log(tweets)
        
        if(tweets.length === 0){
            res.send('No tweets to show')
        } else {
            res.json(tweets)
        }

    } catch (error) {
        console.log(error)
    }

}



module.exports = {
    registerUser,
    loginUser,
    getUserTweets
}