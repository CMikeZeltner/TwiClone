import {FaHeart} from 'react-icons/fa'
import {useDispatch} from 'react-redux'

function Tweet({tweet}) {


  const tweetPagePath = '/' + tweet.userName + '/' + tweet._id

  const handleClick = () => {
    console.log(tweet)
  }



  return (
    <div className='tweet'>
      <a href={tweetPagePath}>
        <h1>{tweet.message}</h1>
        <FaHeart onClick={handleClick}/>
         </a>
    </div>
  )
}
export default Tweet