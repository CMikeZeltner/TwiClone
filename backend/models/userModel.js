const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    displayName: {
        type: String,
        required: false,
        minLength: [1, 'Username must be between 1 and 16 characters'],
        maxLength: [16, 'Username must be between 1 and 16 characters']
    },
    userName: {
        type: String,
        required: [true, 'Enter a username'],
        unique: true,
        minLength: [1, 'Username must be between 1 and 16 characters'],
        maxLength: [16, 'Username must be between 1 and 16 characters']
    },
    email: {
        type: String,
        required: [true, 'Enter an email address'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Enter a password between 8 and 16 characters'],
        minLength: [8, "Password must be between 8 and 16 characters"],
    },
    following: {
        type: [mongoose.Types.ObjectId],
        default: []
    },
    followers: {
        type: [mongoose.Types.ObjectId],
        default: []
    },
    likeList: {
        type: [mongoose.Types.ObjectId],
        default: []
    },
},
{
    timestamps: true
})



module.exports = mongoose.model('User', userSchema)