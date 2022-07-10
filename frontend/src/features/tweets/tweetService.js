import axios from 'axios'


const createTweet = async (userIDMessage, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }

    }
    const response = await axios.post('/tweet', userIDMessage, config)
    return response.data
}


const getUserTweets = async (userName) => {
    const response = await axios.get(userName)
    return response.data
}

const getSingleTweet = async (userNameTweetID) => {
    const response = await axios.get(userNameTweetID)
    return response.data
}



const getFollowedTweets = async (userID) => {
    console.log('in getfollowedtweets')
}

// const likeTweet = async(tweetID, token) => {
//     console.log('hey')

//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }

//     }
//     const response = await axios.post(`/${userID}/${tweetID}/like`, {message: message}, config)
// }


const tweetService = {
    createTweet,
    getUserTweets,
    getSingleTweet,
    getFollowedTweets
}

export default tweetService