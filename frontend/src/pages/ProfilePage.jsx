import NavBar from '../components/NavBar'
import ProfileInfoBox from '../components/ProfileInfoBox'
import TweetFeed from '../components/TweetFeed'
import FollowBar from '../components/FollowBar'


function ProfilePage() {


  return (
    <div className='profile-page-container'>
      <div className='nav-feed-follow-container'>
      <NavBar />
        
      <TweetFeed />
      <FollowBar />
        
      </div>
    </div>

    
  )
}
export default ProfilePage