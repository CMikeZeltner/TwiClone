import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {BsHurricane} from 'react-icons/bs'
import {FaEye} from 'react-icons/fa'
import axios from 'axios'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [showPassword, setShowPassword] = useState(false)

    const [loggedIn, setLoggedIn] = useState(false)
    const [error, setError] = useState(false)
    

    const {email, password} = formData


    const navigate = useNavigate()

    useEffect(() => {
        if(loggedIn){
            navigate('/home')
        }
    }, [loggedIn, navigate])


    const onChange = (e) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value

        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()


       axios.post('/login', {
            formData
       })
       .then(response =>  {
        console.log(response)
        localStorage.setItem('user', JSON.stringify(response.data))
        setLoggedIn(true)
       })
       .catch(error => {
        console.log(error)
       })
    }
       


  return (
    <div className='login-register-root-container'>
    <div className='login-register-container'>
        <BsHurricane className='logo'/>
        <div className='title-form-container'>
            <h1>Sign in to TwiClone</h1>
            
            <form className='login-register-form' 
            onSubmit={handleSubmit}>
                
            <div className='label-input-email'>    
                <label htmlFor="email">Email</label>
                <input type="email" 
                name='email' 
                id='email' 
                value={email} 
                placeholder='Enter your Email address'
                onChange={onChange} />
            </div>    
                
            <div className='label-input-eye'>
            <div className='label-input-password'>    
                <label htmlFor="password">Password</label>
                <input 
                type={showPassword === false ? 'password' : 'input'} 
                name='password' 
                id='password' 
                value={password}
                placeholder='Enter your password' 
                onChange={onChange}/>
            </div>
                <FaEye className='password-toggle'
                onClick={() => setShowPassword(showPassword => !showPassword)} 
                style={{
                    color: showPassword ? '#1da1f2' : 'white'
                }}/>
            </div>
           
                <h2 hidden={error === true ? false : true}>Incorrect credentials</h2>
                <button className='btn btn-submit' type='submit'>Log In</button>
            </form>
            <span>Don't have an account? <a href='/register'>Sign up!</a></span>
        </div>
    </div>
    </div>
  )
}
export default Login