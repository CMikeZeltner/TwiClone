import NavBar from '../components/NavBar'
import ProfileInfoBox from '../components/ProfileInfoBox'
import TweetFeed from '../components/TweetFeed'
import FollowBar from '../components/FollowBar'
import {FaArrowLeft} from 'react-icons/fa'


function ProfilePage() {


  return (
    <div className='profile-page-container'>
      <div className='latest-tweets-sticky'>
        <a href="/home"><FaArrowLeft className='sticky-back-button'/></a>
        <div className='sticky-username-tweet-count'>
        <h2>Mike</h2>
        <h3>1 Tweet</h3>
        </div>
      </div>
      <NavBar />
      <ProfileInfoBox />
      <TweetFeed />
      <FollowBar />
    </div>
  )
}
export default ProfilePage