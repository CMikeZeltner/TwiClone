import {FaUser} from 'react-icons/fa'

function FollowBar() {
  return (
    <div className='root-followbar-container'>

        <div className='followbar-container'>
            <h2>Who to follow</h2>

            <div className='follow-account-container'>
              <FaUser className='followbar-profile-icon'/>
              <div className='followbar-names'>
                <h3>Display Name</h3>
                <h4>UserName</h4>
              </div>
              <button className='btn btn-follow'>Follow</button>
            </div>
            <div className='follow-account-container'>
              <FaUser className='followbar-profile-icon'/>
              <div className='followbar-names'>
                <h3>Display Name</h3>
                <h4>UserName</h4>
              </div>
              <button className='btn btn-follow'>Follow</button>
            </div>
            <div className='follow-account-container'>
              <FaUser className='followbar-profile-icon'/>
              <div className='followbar-names'>
                <h3>Display Name</h3>
                <h4>UserName</h4>
              </div>
              <button className='btn btn-follow'>Follow</button>
            </div>

        </div>


    </div>
  )
}
export default FollowBar