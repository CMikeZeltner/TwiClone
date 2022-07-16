import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import NavBar from '../components/NavBar'
import TweetFeed from '../components/TweetFeed'
import FollowBar from '../components/FollowBar'

function Home() {

  

  const {user} = useSelector((state) => state.auth)




  return (
    <div className='nav-feed-follow-container'>
      <NavBar />
      <TweetFeed />
      <FollowBar />
    </div>
  )
}
export default Home