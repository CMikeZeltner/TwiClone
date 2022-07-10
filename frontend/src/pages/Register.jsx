import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {BsHurricane} from 'react-icons/bs'
import {FaEye} from 'react-icons/fa'
import {register} from '../features/auth/authSlice'


function Register() {

    const [formData, setFormData] = useState({
        userName: '',
        displayName: '',
        email: '',
        password: ''
    })

    const [showPassword, setShowPassword] = useState(false)


    const dispatch = useDispatch()

    const {userName, displayName, email, password} = formData

    const onChange = (e) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value

        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const registerData = {
            userName,
            displayName,
            email,
            password
        }
        dispatch(register(registerData))
    }
       


  return (
    <div className='login-register-root-container'>
    <div className='login-register-container'>

        <BsHurricane className='logo' />
        <div className='title-form-container'>
        <h1>Create a Twiclone account!</h1>
            <form className='login-register-form' 
            onSubmit={handleSubmit}>

                <div className='label-input'>
                    <label htmlFor="userName">Username</label>
                    <input type="text" 
                    name='userName' 
                    id='userName' 
                    value={userName} 
                    placeholder='Username'
                    onChange={onChange} />
                </div>

                <div className='label-input'>
                    <label htmlFor="displayName">Display Name</label>
                    <input type="text" 
                    name='displayName' 
                    id='displayName' 
                    value={displayName}
                    placeholder='Display name' 
                    onChange={onChange} />
                </div>

                <div className='label-input'>
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    name='email' 
                    id='email' 
                    value={email} 
                    placeholder='Email address'
                    onChange={onChange} />
                </div>

            <div className='label-input-eye'>
                <div className='label-input-password'>
                    <label htmlFor="password">Password</label>
                    <input 
                    type={showPassword ? 'input' : 'password'} 
                    name='password' 
                    id='password' 
                    placeholder='Password'
                    value={password} 
                    onChange={onChange}/>
                    </div>
                    <FaEye className='password-toggle'
                    onClick={() => showPassword ? setShowPassword(false) : setShowPassword(true)}
                    style={{
                        color: showPassword ? '#1da1f2' : 'white'
                    }}/>
                </div>
                <button className='btn btn-submit' type='submit'>Submit</button>
            </form>
        <span>Already have an account? <a href='/login'>Log in!</a></span>
        </div>
    </div>
    </div>
  )
}
export default Register