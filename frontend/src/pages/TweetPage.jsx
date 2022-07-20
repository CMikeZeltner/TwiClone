import NavBar from "../components/NavBar"
import FollowBar from "../components/FollowBar"
import {FaHeart, FaUser, FaComment, FaRetweet, FaArrowCircleUp} from 'react-icons/fa'
import {useEffect, useState} from 'react'
import axios from "axios"




function TweetPage() {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [tweet, setTweet] = useState({})

  useEffect(() => {
    async function fetchTweet(){
      const response = await axios(`${window.location.pathname}`)
      .then(response => {
        setTweet(response.data)
        setLoading(false)
      })
      .catch(error => {
        setError(true)
        console.log(error)
      })
    }
    fetchTweet()
  }, [])


  if(loading){
    return <div>
       <h2>Loading...</h2>
   </div>
 }

 if(error){
  return (
  <>
    <h2>Something went wrong</h2>
    <a href={window.location.pathname}
    className='btn btn-submit'>Reload</a>
  </>
  )
}

 

  return (
    <div className='nav-feed-follow-container'>
        <NavBar />

        <div className="tweet-page-root-container">
          <div className="tp-prof-pic-user-display-name-container">

            <a href={`/${tweet.user.userName}`}>
            <FaUser className="tweet-profile-pic"/>
            </a>
            <div className="tp-user-display-name">
              <a href={`/${tweet.user.userName}`}><h2>{tweet.user.displayName}</h2></a>
              <a href={`/${tweet.user.userName}`}><h2>{`@${tweet.user.userName}`}</h2></a>
              
            </div>
              
          </div> 

          <p>{tweet.message}</p>

          <div className="tp-tweet-time-date">

            <h2>{new Date(tweet.createdAt).toLocaleString('en-us', {hour: '2-digit', minute: '2-digit'})}</h2>
            <span>*</span>
            <h2>{new Date(tweet.createdAt).toLocaleString('en-us', {month: 'short', year: 'numeric'})}</h2>

          </div>

          <div className="tp-retweet-likes">
            <h2>{tweet.likes} Likes</h2>
          </div>

          <div className='tp-tweet-interactions'>
          <FaComment style={{color: 'white' }} 
          className='tweet-interaction-button'/>
          <FaHeart style={{color: 'white' }}
          className='tweet-interaction-button'/>
          <FaRetweet style={{color: 'white' }}
          className='tweet-interaction-button'/>
          <FaArrowCircleUp style={{color: 'white' }}
          className='tweet-interaction-button'/>
        </div>
        
        </div>  
        
        <FollowBar />
    
    </div>
  )
}
export default TweetPage