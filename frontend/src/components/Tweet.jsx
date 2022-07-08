import {FaHeart} from 'react-icons/fa'
//import {useDispatch} from 'react-redux'

function Tweet({tweet}) {

  // const dispatch = useDispatch()


  const likeTweet = (e) => {
    e.preventDefault()
  }



  return (
    <div className='tweet'>
      <a href={tweet.tweetURL}>
        <h1>{tweet.message}</h1>
      </a>  
        <button onSubmit={likeTweet}><FaHeart/></button>
        
         
    </div>
  )
}
export default Tweet