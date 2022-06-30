
import NavBar from '../components/NavBar'
import TweetFeed from '../components/TweetFeed'
import FollowBar from '../components/FollowBar'

function ProfilePage() {

  


  return (
    <div className='home-container'>
      <NavBar />
      <TweetFeed />
      <FollowBar />
    </div>
  )
}
export default ProfilePage