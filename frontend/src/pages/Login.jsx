import {useState} from 'react'
const axios = require('axios').default


function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

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
                console.log(response.data)
            }
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