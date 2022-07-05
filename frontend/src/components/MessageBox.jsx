import {FaUser} from 'react-icons/fa'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { createTweet, reset } from "../features/tweets/tweetSlice"



function MessageBox() {

 // const {user} = useSelector((state) => state.auth)
const {isLoading, isSuccess} = useSelector((state) => state.tweets)
const [tweet, setTweet] = useState('')


  const dispatch = useDispatch()


  useEffect(() => {
    return () => {
      if(isSuccess){
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {
      if(isLoading){
        return <h2>Loading...</h2>
      }
  }, [dispatch, isLoading])





  const handleSubmit = (e) => {
    console.log('!!! ' + tweet)
    e.preventDefault()
    if(tweet.length <= 140){
      console.log('tweet' + tweet)
        dispatch(createTweet(tweet))
    }
  }



  

  return (
    <div className='msgbox-root-container'>
      <form onSubmit={handleSubmit}>
        <FaUser className='testtest'/>
        <div className='textarea-submit'>
            <div className='textarea-counter'>
              <textarea 
              id='tweet'
              value={tweet}
              placeholder="What's happening?"
              onChange={e => setTweet(e.target.value)}
              />
              <p className='tweet-counter'>140</p>
            </div>
            
            <button className='btn btn-tweet'>Tweet</button>
        </div>
      </form>   


    </div>
  )
}
export default MessageBox