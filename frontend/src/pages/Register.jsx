import {useState} from 'react'
import {BsHurricane} from 'react-icons/bs'
const axios = require('axios').default



function Register() {

    const [formData, setFormData] = useState({
        userName: '',
        displayName: '',
        email: '',
        password: ''
    })

    const {userName, displayName, email, password} = formData

    const onChange = (e) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value

        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
             const response = await axios.post('/register', formData)
            if(response.data){
                console.log(response.data)
            }
        }catch (error) {
            console.log(error)
        }
    }
       


  return (
    <div className='login-register-container'>

        <BsHurricane className='logo' />
        <div className='title-form-container'>
        <h1>Create a Twiclone account!</h1>
            <form className='login-register-form' 
            onSubmit={handleSubmit}>
                <label htmlFor="userName">Username:</label>
                <input type="text" 
                name='userName' 
                id='userName' 
                value={userName} 
                placeholder='Username'
                onChange={onChange} />
                <p></p>
                <label htmlFor="displayName">Display Name:</label>
                <input type="text" 
                name='displayName' 
                id='displayName' 
                value={displayName}
                placeholder='Display name' 
                onChange={onChange} />
                <p></p>
                <label htmlFor="email">Email:</label>
                <input type="email" 
                name='email' 
                id='email' 
                value={email} 
                placeholder='Email address'
                onChange={onChange} />
                <p></p>
                <label htmlFor="password">Password:</label>
                <input 
                type="password" 
                name='password' 
                id='password' 
                placeholder='Password'
                value={password} 
                onChange={onChange}/>
                <button type='submit'>Submit</button>
            </form>
        <span>Already have an account? <a href='/login'>Log in here!</a></span>
        </div>
    </div>
  )
}
export default Register