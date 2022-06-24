import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {BsHurricane} from 'react-icons/bs'
import {login} from '../features/auth/authSlice'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [loggedIn, setLoggedIn] = useState(false)
    

    const {email, password} = formData

    const {user} = useSelector((state) => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(user || loggedIn){
            navigate('/home')
        }
    }, [user, navigate, dispatch, loggedIn])

    const onChange = (e) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value

        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }
        dispatch(login(userData))
        

        if(user){
            setLoggedIn(true)
        } else {
            console.log('wrong info')
        }
    }

       


  return (
    <div className='login-register-container'>
        <BsHurricane className='logo'/>
        <div className='title-form-container'>
            <h1>Sign in to TwiClone</h1>
            
            <form className='login-register-form' 
            onSubmit={handleSubmit}>
                
                <label htmlFor="email">Email:</label>
                <input type="email" 
                name='email' 
                id='email' 
                value={email} 
                placeholder='Enter your Email address'
                onChange={onChange} />
                
                <label htmlFor="password">Password:</label>
                <input 
                type="password" 
                name='password' 
                id='password' 
                value={password}
                placeholder='Enter your password' 
                onChange={onChange}/>
                <button type='submit'>Submit</button>
            </form>
            <span>Don't have an account? <a href='/register'>Register here!</a></span>
        </div>
    </div>
  )
}
export default Login