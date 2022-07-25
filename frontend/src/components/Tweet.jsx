import {FaUser, FaRetweet} from 'react-icons/fa'
import {FaRegComment, FaRegHeart} from 'react-icons/fa'
import {FiShare} from 'react-icons/fi'
import axios from 'axios'


//import {useDispatch} from 'react-redux'

function Tweet({tweet, color}) {

  const user = JSON.parse(localStorage.getItem('user'))



  const likeTweet = () => {

    const config = {
      headers: {Authorization: `Bearer ${user.token}`}
    }

    const userID = {userID: user._id}

    const response = axios.post(`/${tweet.user.userName}/status/${tweet._id}/like`, userID, config)
    .then(() => {
      console.log('success')
    })
    .catch(error => {
      console.log(`Error: ${error}`)
    })
  }



  return (
    <div className='tweet-root-container'>
      <a href={`/${tweet.user.userName}`}>
        <FaUser className='tweet-profile-pic'/>
      </a>
        <div className='tweet-content-container'>

      <a href={`${tweet.tweetURL}`}>
        <div className='tweet-names'>
          <h2 style={{color: 'white'}}>{tweet.user.displayName}</h2>
          <h2>{`@${tweet.user.userName}`}</h2>
          <span style={{color: 'white'}}>*</span>
          <h2>{new Date(tweet.createdAt).toLocaleString('en-us', {month: 'short', year: 'numeric'})}</h2>
        </div>

        <p className='tweet-message'
        style={{color: 'white'}}>{tweet.message}</p>
      </a>

        <div className='tweet-interactions'>
          <div className='tweet-interaction-button-container tibc-comment'>
            <FaRegComment style={{color: 'white' }} 
                className='tweet-interaction-button'/>
          </div>
          <div className='tweet-interaction-button-container tibc-retweet'>
              <FaRetweet style={{color: 'white' }}
                className='tweet-interaction-button'/>
          </div>
          <div className='tweet-interaction-button-container tibc-heart'>
              <FaRegHeart color={color}
                className='tweet-interaction-button'
                onClick={likeTweet}/>
          </div>
          <div className='tweet-interaction-button-container tibc-share'>
              <FiShare style={{color: 'white' }}
                className='tweet-interaction-button'/>
          </div>
          
        </div>
        </div>
        
        
         
    </div>
  )
}
export default Tweet