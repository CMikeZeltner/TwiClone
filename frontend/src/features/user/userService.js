import axios from "axios"



const getUserInfo = async (userName) => {
    const response = await axios.get(userName)

    if(response.data){
        console.log(response.data)
        return response.data
    }
}







const userService = {
    getUserInfo
}

export default userService