import {useNavigate} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {BsHurricane, BsPersonFill} from 'react-icons/bs'

function NavBar() {
  return (
    <div className='root-navbar-container'>
        <nav className='navbar-container'>
            <div className='navbar-link'>
                
                <a href="/home"><BsHurricane className='navbar-icon'/></a>
            </div>
            <div className='navbar-link'>
                <FaHome className='navbar-icon'/>
                <a href="/home">Home</a>
            </div>
            <div className='navbar-link'>
                <BsPersonFill className='navbar-icon'/>
                <a href="/home">Profile</a>
            </div>

        </nav>
        
        
        </div>
  )
}
export default NavBar