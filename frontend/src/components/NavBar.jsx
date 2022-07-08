import {FaHome} from 'react-icons/fa'
import {BsHurricane, BsPersonFill} from 'react-icons/bs'
import {useSelector} from 'react-redux'

function NavBar() {

    const {user} = useSelector((state) => state.auth)
    const userName = user.userName
    
    
  return (
    <div className='root-navbar-container'>
        <nav className='navbar-container'>
            <div className='navbar-link'>
                
                <a href="/home"><BsHurricane className='navbar-icon nav-logo'/></a>
            </div>
            <div className='navbar-link'>
                <FaHome className='navbar-icon'/>
                <a href="/home">Home</a>
            </div>
            <div className='navbar-link'>
                <BsPersonFill className='navbar-icon'/>
                <a href={`/${userName}`}>Profile</a>
            </div>

        </nav>
        
        
        </div>
  )
}
export default NavBar