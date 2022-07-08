import Tweet from "./Tweet"
import React from "react"
import MessageBox from "./MessageBox"
import ProfileInfoBox from "./ProfileInfoBox"
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getUserTweets, getFollowedTweets, reset } from "../features/tweets/tweetSlice"
import {followUser} from '../features/auth/authSlice'


function TweetFeed() {

const {user} = useSelector((state) => state.auth)
const {tweets, isLoading, isSuccess} = useSelector((state) => state.tweets)



  const dispatch = useDispatch()


  useEffect(() => {
    return () => {
      if(isSuccess){
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {
   if(window.location.pathname === '/home'){
      dispatch(getFollowedTweets())
   } else {
      dispatch(getUserTweets(window.location.pathname))
      
   }
  }, [dispatch])
  


  
  const followAccount = () => {
    
    dispatch(followUser({follower: user._id, folowee: window.location.pathname.slice(1)}))
  }

 

  if(isLoading){
    return <div className="tweetfeed-root-container"><h1>Loading...</h1>
    </div>
  }


  return (
    <div className='tweetfeed-root-container'>
      <h2 className='latest-tweets-sticky'>{window.location.pathname === '/home' ? 'Latest Tweets' : user.displayName}</h2>


      {window.location.pathname === '/home' ? <MessageBox /> : <ProfileInfoBox/>}


      <button onClick={followAccount}>Follow</button>
      {!tweets ? <h2>No tweets to show</h2> : 
      tweets.map((tweet) => (
        <Tweet key={tweet._id}
        tweet={tweet} />
      ))}
      
      
    </div>
  )
}
export default TweetFeed