import NavBar from "../components/NavBar"
import FollowBar from "../components/FollowBar"
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getSingleTweet, reset } from "../features/tweets/tweetSlice"




function TweetPage() {

  const dispatch = useDispatch()
  const {tweets, isLoading, isSuccess} = useSelector((state) => state.tweets)
    //Get tweet ID from URL pathname



  useEffect(() => {
    const userNameTweetID = window.location.pathname
    dispatch(getSingleTweet(userNameTweetID))

  }, [dispatch])

  useEffect(() => {
    return () => {
      if(isSuccess){
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  if(isLoading){
    return( <h2>Loading...</h2>)
  }

 

  return (
    <div className='home-container'>
        <NavBar />
        {tweets.length === 0 ? <h2>This tweet does not exist</h2> : 
        <>
        <div>{tweets.user.displayName}</div>
        <div>{`@${tweets.user.userName}`}</div>
        <div>{tweets.message}</div>
        </>
        
        }
        <FollowBar />
    
    </div>
  )
}
export default TweetPage