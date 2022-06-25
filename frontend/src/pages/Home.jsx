import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import NavBar from '../components/NavBar'
import TweetFeed from '../components/TweetFeed'
import FollowBar from '../components/FollowBar'

function Home() {

  const [loggedIn, setLoggedIn] = useState(false)  

  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    if(user){
      console.log('user logged in')
      setLoggedIn(true)
    } else {
      console.log('user not logged in!!')
    }
  }, [user])


  return (
    <div className='home-container'>
      <NavBar />
      <TweetFeed />
      <FollowBar />
    </div>
  )
}
export default Home