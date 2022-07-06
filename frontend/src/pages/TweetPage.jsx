import NavBar from "../components/NavBar"
import Tweet from "../components/Tweet"
import FollowBar from "../components/FollowBar"
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getSingleTweet, reset } from "../features/tweets/tweetSlice"




function TweetPage() {


  const dispatch = useDispatch()



  const {tweets, isLoading, isSuccess} = useSelector((state) => state.tweets)





  useEffect(() => {
    return () => {
      if(isSuccess){
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {

    //Get tweet ID from URL pathname
    const tweetID = window.location.pathname.split('/').at(-1)

    dispatch(getSingleTweet(tweetID))

  }, [dispatch])

  return (
    <div className='home-container'>
        <NavBar />
        <div>{tweets.message}</div>
        <div>{tweets.userName}</div>
        <FollowBar />
    
    </div>
  )
}
export default TweetPage