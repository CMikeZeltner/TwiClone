import NavBar from '../components/NavBar'
import TweetFeed from '../components/TweetFeed'
import FollowBar from '../components/FollowBar'
import { useState, useEffect } from 'react'
import axios from 'axios'

function ProfilePage() {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [info, setInfo] = useState({})


  useEffect(() => {
    async function fetchData(){
      const response = await axios(window.location.pathname)
      .then(response => {
        setInfo(response.data)
        setLoading(false)
      })
      .catch(error => {
        setError(true)
        console.log(error)
      })
    }
    fetchData()
  }, [])


  


  return (
    <div className='profile-page-container'>
      <div className='nav-feed-follow-container'>
      <NavBar />
        
      <TweetFeed info={info} />
      <FollowBar />
        
      </div>
    </div>

    
  )
}
export default ProfilePage