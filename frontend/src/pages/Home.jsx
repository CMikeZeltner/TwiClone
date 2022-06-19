import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'

function Home() {

  const [loggedIn, setLoggedIn] = useState(false)  

  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    if(user){
      console.log('user logged in')
      setLoggedIn(true)
    } else {
      console.log('user not logged in!!')
    }
  }, [user])


  return (
    <>
      <div>Home</div>
    </>
  )
}
export default Home