const mongoose = require('mongoose')
const User = require('./userModel')


const tweetSchema = mongoose.Schema({
    user: {
        userID: {
            type: mongoose.Types.ObjectId,
        },
        userName: {
            type: String
        },
        displayName: {
            type: String
        }
    },
    message: {
        type: String,
        require: true,
        minLength: [1, 'Cannot post blank tweets'],
        maxLength: [240, 'Max tweet length is 240 characters']
    },
    likeCount: {
        type: Number,
        default: 0
    },
    likeList: {
        type: [mongoose.Types.ObjectId],
        default: []
    },
    tweetURL : {
        type: String,
    }
},
{
    timestamps: true
})


module.exports = mongoose.model('Tweet', tweetSchema)