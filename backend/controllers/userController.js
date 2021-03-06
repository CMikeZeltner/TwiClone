const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Tweet = require('../models/tweetModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const registerUser = asyncHandler(async (req, res) => {

    const {userName, displayName, email, password} = req.body.formData
    console.log(req.body.formData)

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

    if(emailTaken){
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
            email: user.email,
            token: generateToken(user._id)
        })
    }
    
    
})


const loginUser = asyncHandler(async (req, res, next) => {
    const {email, password} = req.body.formData

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user._id,
            userName: user.userName,
            displayName: user.displayName,
            token: generateToken(user._id)
        })
        
    } else {
        res.status(401)
        res.send('Invalid credentials')
    }
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })
}

const getUserInfo = async (req, res) => {
    const user = await User.findOne({userName: req.params.userName}).select(['-password', '-email'])
    
    if(!user){
        throw new Error('User does not exist')
    } else {
        res.json(user) 
    }
}


const followUser = async (req, res) => {
    const {toFollowUserName, follower} = req.body
    const toFollow = await User.findOne({userName: toFollowUserName})
    const theFollower = await User.findOne({userName: follower})
    

    if(!toFollow.followers.includes(theFollower._id)){
        //Add to array of accounts that follow the user
        toFollow.followers.push(theFollower._id)
        toFollow.followerCount += 1
        await toFollow.save()


        //Add to array of accounts the user follows
        theFollower.following.push(toFollow._id)
        theFollower.followingCount += 1
        await theFollower.save()
    } else {
        //Add to array of accounts that follow the user
        toFollow.followers.pull(theFollower._id)
        toFollow.followerCount -= 1
        await toFollow.save()


        //Add to array of accounts the user follows
        theFollower.following.pull(toFollow._id)
        theFollower.followingCount -= 1
        await theFollower.save()
    }

    console.log(toFollow)
    console.log(theFollower)

    return res.status(204)


}







module.exports = {
    registerUser,
    loginUser,
    followUser,
    getUserInfo
}