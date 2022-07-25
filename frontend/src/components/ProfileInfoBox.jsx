import axios from 'axios'
import { useEffect } from 'react'
import {FaUser, FaMapMarker, FaCalendar} from 'react-icons/fa'

function ProfileInfoBox({info}) {

  const user = JSON.parse(localStorage.getItem('user'))



  const handleClick = () => {
    const config = {
      headers: {Authorization: `Bearer ${user.token}`}
    }

      const followData = {
        toFollowUserName: window.location.pathname.slice(1),
        follower: user.userName
      }
      axios.post(`${window.location.pathname}/follow`, followData, config)
      .then(response => (
        console.log(response)
      ))
      .catch(error => console.log(error))

  }









  return (
    <div className="profile-info-root">

    <div className='profile-info-container'>

    <div className='prof-pic-follow-btn'>
      <FaUser className='profile-picture'/>
      <button className='btn btn-follow'
      onClick={handleClick}>Follow</button>
    </div>
      <div className='profile-username-displayname'>
        <h2>{info.displayName}</h2>
        <h3>{`@${info.userName}`}</h3>
      </div>

      <p className='profile-description'>profile description </p>

      <div className='profile-location-join-date'>
        <div className='profile-location-join-individual-div'>
        <FaMapMarker className='profile-info-svg'/>
        <span>United States</span>
        </div>
        <div className='profile-location-join-individual-div'>
        <FaCalendar className='profile-info-svg'/>
        <span>{new Date(info.createdAt).toLocaleString('en-us', {month: 'long', year: 'numeric'})}</span>
        </div>
      </div>

      <div className='profile-following-followers'>
        <span><span className='profile-num-follow'>{info.followingCount}</span> Following</span>
        <span><span className='profile-num-follow'>{info.followerCount}</span> {info.followerCount !== 1 ? 'Followers' : 'Follower'}</span>
      </div>

    </div>
    </div>
  )
}
export default ProfileInfoBox