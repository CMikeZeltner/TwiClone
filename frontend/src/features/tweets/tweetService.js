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
    
    const response = await axios.get(userName)
    return response.data
}

const getSingleTweet = async (tweetID) => {
    const response = await axios.get(tweetID)
    return response.data
}


const tweetService = {
    createTweet,
    getUserTweets,
    getSingleTweet,
}

export default tweetService