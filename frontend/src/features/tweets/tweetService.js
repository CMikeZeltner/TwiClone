import axios from 'axios'


const createTweet = async (message, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }

    }
    const response = await axios.post('/tweet', {message: message}, config)
    return response.data
}


const getUserTweets = async (userName) => {
    console.log('AAAAAA')
    const response = await axios.get(userName)
    return response.data
}

const getSingleTweet = async (tweetID) => {
    const response = await axios.get(tweetID)
    return response.data
}



const getFollowedTweets = async (userID) => {
    console.log('in getfollowedtweets')
}


const tweetService = {
    createTweet,
    getUserTweets,
    getSingleTweet,
    getFollowedTweets
}

export default tweetService