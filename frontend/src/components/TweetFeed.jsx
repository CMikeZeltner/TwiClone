import Tweet from "./Tweet"
import React from "react"
import MessageBox from "./MessageBox"
import ProfileInfoBox from "./ProfileInfoBox"
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getUserTweets, getFollowedTweets, reset } from "../features/tweets/tweetSlice"
import {followUser} from '../features/auth/authSlice'
import {FaArrowLeft} from 'react-icons/fa'


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
  




 

  if(isLoading){
    return <div className="tweetfeed-root-container"><h1>Loading...</h1>
    </div>
  }


  return (
    <div className='tweetfeed-root-container'>


      


      
      {!tweets ? <h2>No tweets to show</h2> : 
      tweets.map((tweet) => (
        <Tweet key={tweet._id}
        tweet={tweet} />
      ))}
      
      
    </div>
  )
}
export default TweetFeed