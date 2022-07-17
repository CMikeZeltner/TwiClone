import {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import TweetFeed from '../components/TweetFeed'
import FollowBar from '../components/FollowBar'

function Home() {






  return (
    <div className='nav-feed-follow-container'>
      <NavBar />
      <TweetFeed />
      <FollowBar />
    </div>
  )
}
export default Home