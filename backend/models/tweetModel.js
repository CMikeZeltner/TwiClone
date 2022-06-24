const mongoose = require('mongoose')


const tweetSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    message: {
        type: String,
        require: true,
        minLength: [1, 'Cannot post blank tweets'],
        maxLength: [240, 'Max tweet length is 240 characters']
    },
    likes: {
        type: [{
            type: Number,
            default: 0
    }]
    }
},
{
    timestamps: true
})



module.exports = mongoose.model('Tweet', tweetSchema)