import NavBar from '../components/NavBar'
import TweetFeed from '../components/TweetFeed'
import FollowBar from '../components/FollowBar'
import { useEffect } from 'react'

function ProfilePage() {

  useEffect(() => {

  })


  return (
    <div className='home-container'>
      <NavBar />
      <TweetFeed />
      <FollowBar />
    </div>
  )
}
export default ProfilePage