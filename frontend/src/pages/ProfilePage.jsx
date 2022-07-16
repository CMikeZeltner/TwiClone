import NavBar from '../components/NavBar'
import ProfileInfoBox from '../components/ProfileInfoBox'
import TweetFeed from '../components/TweetFeed'
import FollowBar from '../components/FollowBar'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUserInfo} from '../features/user/userSlice'


function ProfilePage() {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserInfo(window.location.pathname.slice(1)))
  }, [])


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