import {FaUser} from 'react-icons/fa'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { createTweet, reset } from "../features/tweets/tweetSlice"



function MessageBox() {

const {user} = useSelector((state) => state.auth)

const {isLoading, isSuccess} = useSelector((state) => state.tweets)
const [tweet, setTweet] = useState('')
const [length, setLength] = useState(140)
const [danger, setDanger] = useState(false)
const [disabled, setDisabled] = useState(true)


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

  useEffect(() => {

    if(tweet.length > 0 && tweet.trim().length !== 0){
      setLength(140 - tweet.length)
      setDisabled(false)
    } else{
      setLength(140)
      setDisabled(true)
    }

    if(tweet.length >= 120){
      setDanger(true)
    } else {
      setDanger(false)
    }
    
  }, [tweet])


  const handleChange = (e) => {
    setTweet(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if(tweet.length <= 140 && tweet.trim().length > 0){
      dispatch(createTweet({userID: user._id, message: tweet}))
    } 
  }



  

  return (
    <div className='msgbox-root-container'>
      <form
      className='msgbox-form' 
      onSubmit={handleSubmit}>
        <FaUser className='msgbox-profile-icon'/>
        <div className='textarea-submit'>
            <div className='textarea-counter'>
              <textarea 
              id='tweet'
              value={tweet}
              placeholder="What's happening?"
              onChange={handleChange}
              />
              <p 
              className='tweet-counter'
              style={{
                color: danger !== true ? 'white' : 'red'
              }}>
              {length}</p>
            </div>
            
            <button className='btn btn-tweet'
            disabled={disabled}>Tweet</button>
        </div>
      </form>   


    </div>
  )
}
export default MessageBox