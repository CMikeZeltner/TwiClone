import {useNavigate} from 'react-router-dom'
import {logout, reset} from '../features/auth/authSlice'
import {useDispatch} from 'react-redux'


function Logout() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')

    }

  return (
    <div>

        <h2>Are you sure you want to log out?</h2>
        <button type='submit' 
        onClick={handleLogout}>Log out</button>

    </div>
  )
}
export default Logout