import {FaUser, FaMapMarker, FaCalendar} from 'react-icons/fa'

function ProfileInfoBox() {
  return (
    <div className="profile-info-root">

    <div className='profile-info-container'>

      <FaUser className='profile-picture'
      style={{
        backgroundcolor: 'blue'
      }}/>
      <div className='profile-username-displayname'>
        <h2>Display Name</h2>
        <h3>@User Name</h3>
      </div>

      <p className='profile-description'>profile description</p>

      <div className='profile-location-join-date'>
        <FaMapMarker className='profile-info-svg'/>
        <span>United States</span>
        <FaCalendar className='profile-info-svg'/>
        <span>Joined March 2020</span>
      </div>

      <div className='profile-following-followers'>
        <span><span className='profile-num-follow'>100</span> Following</span>
        <span><span className='profile-num-follow'>50</span> Followers</span>
      </div>

    </div>
    </div>
  )
}
export default ProfileInfoBox