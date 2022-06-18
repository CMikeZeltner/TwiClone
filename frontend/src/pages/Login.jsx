import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
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
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" 
            name='email' 
            id='email' 
            value={email} 
            onChange={onChange} />
            <p></p>
            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            name='password' 
            id='password' 
            value={password} 
            onChange={onChange}/>
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}
export default Login