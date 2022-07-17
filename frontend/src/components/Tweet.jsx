import {FaHeart, FaUser, FaComment, FaRetweet, FaArrowCircleUp} from 'react-icons/fa'
//import {useDispatch} from 'react-redux'

function Tweet({tweet}) {

  // const dispatch = useDispatch()


  const likeTweet = (e) => {
    e.preventDefault()
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
        
        
         
    </div>
  )
}
export default Tweet