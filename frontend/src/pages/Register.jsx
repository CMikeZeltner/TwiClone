import {useState} from 'react'
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
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Username:</label>
            <input type="text" 
            name='userName' 
            id='userName' 
            value={userName} 
            onChange={onChange} />
            <p></p>
            <label htmlFor="displayName">Display Name:</label>
            <input type="text" 
            name='displayName' 
            id='displayName' 
            value={displayName} 
            onChange={onChange} />
            <p></p>
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
export default Register