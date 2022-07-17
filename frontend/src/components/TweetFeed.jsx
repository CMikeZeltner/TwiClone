import Tweet from "./Tweet"
import React from "react"
import MessageBox from "./MessageBox"
import ProfileInfoBox from "./ProfileInfoBox"
import {useEffect, useState} from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import axios from "axios"


function TweetFeed({info}) {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [tweets, setTweets] = useState({})


  useEffect(() => {
    async function fetchTweets(){
      const response = await axios(`${window.location.pathname.slice(1)}/tweets`)
      .then(response => {
        setTweets(response.data)
        setLoading(false)
      })
      .catch(error => {
        setError(true)
        console.log(error)
      })
    }
    fetchTweets()
  }, [])

   if(loading){
     return <div>
        <h2>Loading...</h2>
    </div>
  }


  return (
    <div className='tweetfeed-root-container'>

      <div className='latest-tweets-sticky'>
        <a href="/home"><FaArrowLeft className='sticky-back-button'/></a>
        <div className='sticky-username-tweet-count'>
        <h2>{window.location.pathname === '/home' ? 'Latest Tweets' : info.displayName}</h2>
        <h3>{window.location.pathname === '/home' ? '' : '1 Tweet'}</h3>
        </div>
      </div>


      {window.location.pathname === '/home' ? <MessageBox/> : <ProfileInfoBox info={info}/> }
      


      
       {!tweets ? <h2>No tweets to show</h2> : 
      tweets.map((tweet) => (
        <Tweet key={tweet._id}
        tweet={tweet} />
      ))} 
      
      
    </div>
  )
}
export default TweetFeed