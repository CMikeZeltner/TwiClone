import axios from "axios";


const register = async (user) => {
    const response = await axios.post('/register', user)

    if(response.data){
        console.log(response.data)
        localStorage.setItem('user', JSON.stringify(response.data))

        return response.data
    }
}

const login = async (user) => {
    const response = await axios.post('/login', user)

    if(response.data){
        console.log(response.data)
        localStorage.setItem('user', JSON.stringify(response.data))

        return response.data
    }
}

const logout = () => {
    localStorage.removeItem('user')
}







const authService = {
    register,
    login,
    logout
}

export default authService