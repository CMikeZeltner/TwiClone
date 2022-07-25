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

  const user = JSON.parse(localStorage.getItem('user'))

  
  let numTweets = ''
  if(info){
    if(info.tweetCount === 1){
      numTweets = '1 Tweet'
    } else {
      numTweets = `${info.tweetCount} Tweets`
    }
}


  useEffect(() => {
    async function fetchTweets(){
        const response = await axios(window.location.pathname + '/tweets')
        .then(response => {
          setTweets(response.data.reverse())
          setLoading(false)
        })
        .catch(error => {
          setLoading(false)
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
        <h2>{info.displayName}</h2>
        <h3>{numTweets}</h3>
        </div>
      </div>


      {<ProfileInfoBox info={info}/> }
    

      {!tweets ? <h2>No tweets to show</h2> : 
      tweets.map((tweet) => (

        <Tweet key={tweet._id}
        tweet={tweet}
        color={info.likeList.includes(tweet._id) === true ? 'red' : 'white'} 
        />
      ))} 
      
    </div>
  )
}
export default TweetFeed