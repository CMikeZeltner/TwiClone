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
      const response = await axios(window.location.pathname.slice(1))
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



  if(loading){
    return 'Loading...'
  }

  if(error){
    return (
    <>
      <h2>Something went wrong</h2>
      <a href={window.location.pathname}
      className='btn btn-submit'>Reload</a>
    </>
    )
  }

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