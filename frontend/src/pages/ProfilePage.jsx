import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import NavBar from '../components/NavBar'
import TweetFeed from '../components/TweetFeed'
import FollowBar from '../components/FollowBar'

function ProfilePage() {

  

  const {user} = useSelector((state) => state.auth)


  return (
    <div className='home-container'>
      <NavBar />
      <TweetFeed />
      <FollowBar />
    </div>
  )
}
export default ProfilePage