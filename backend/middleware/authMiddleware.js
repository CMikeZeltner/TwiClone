const jwt = require('jsonwebToken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const protect = asyncHandler(async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')      
            next()
        } catch (error) {
            throw new Error('Not authorized')
        }
    }

    if(!token){
        throw new Error('Not authorized')
    }
})


module.exports = {
    protect
}