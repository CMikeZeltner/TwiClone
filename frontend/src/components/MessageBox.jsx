import {FaUser} from 'react-icons/fa'
import {useState, useEffect} from 'react'
import axios from 'axios'



function MessageBox() {


const [tweet, setTweet] = useState('')
const [length, setLength] = useState(140)
const [danger, setDanger] = useState(false)
const [disabled, setDisabled] = useState(true)








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
      const user = JSON.parse(localStorage.getItem('user'))
      const tweetUserID = { userID: user._id, message: tweet }
      const config = {
        headers: {Authorization: `Bearer ${user.token}`}
      }

      axios.post('/tweet', tweetUserID, config)
      .then(response => (
        console.log(response),
        setTweet('')
      ))
      .catch(error => console.log(error))
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