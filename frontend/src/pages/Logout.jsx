import {useNavigate} from 'react-router-dom'


function Logout() {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('user')
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