import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {BsHurricane} from 'react-icons/bs'
const axios = require('axios').default


function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const navigate = useNavigate()

    const onChange = (e) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value

        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
             const response = await axios.post('/login', formData)
            if(response.data){
               localStorage.setItem('user', JSON.stringify(response.data))
            }
            navigate('/home')
        }catch (error) {
            console.log(error)
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