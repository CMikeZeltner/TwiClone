import {FaHome} from 'react-icons/fa'
import {BsHurricane, BsPersonFill} from 'react-icons/bs'
import {useSelector} from 'react-redux'

function NavBar() {

    const {user} = useSelector((state) => state.auth)
    const userName = user.userName
    
    
  return (
    <div className='root-navbar-container'>
        <nav className='navbar-container'>
            
                
            <a className='navbar-link' href="/home">
                <BsHurricane className='navbar-icon nav-logo'/>
            </a>
            

            <a href="/home" className='navbar-link'>
                <FaHome className='navbar-icon'/>
                <span className='nav-text'>Home</span>
            </a>

            <a href={`/${userName}`} className='navbar-link'>
                <BsPersonFill className='navbar-icon'/>
                <span className='nav-text'>Profile</span>
            </a>

        

        </nav>

        
        
        
        </div>
  )
}
export default NavBar