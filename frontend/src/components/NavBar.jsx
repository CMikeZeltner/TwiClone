import {FaHome} from 'react-icons/fa'
import {BsHurricane, BsPersonFill} from 'react-icons/bs'

function NavBar() {

    const userLink = JSON.parse(localStorage.getItem('user'))
    
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

            <a href={`/${userLink.userName}`} className='navbar-link'>
                <BsPersonFill className='navbar-icon'/>
                <span className='nav-text'>Profile</span>
            </a>

        

        </nav>

        
        
        
        </div>
  )
}
export default NavBar