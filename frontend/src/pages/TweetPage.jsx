import NavBar from "../components/NavBar"
import Tweet from "../components/Tweet"
import FollowBar from "../components/FollowBar"
import {useEffect, useState} from 'react'
import axios from "axios"




function TweetPage() {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [tweet, setTweet] = useState({})

  useEffect(() => {
    async function fetchTweet(){
      const response = await axios(window.location.pathname)
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

  console.log(tweet)

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
        <Tweet tweet={tweet}/>      
        <FollowBar />
    
    </div>
  )
}
export default TweetPage