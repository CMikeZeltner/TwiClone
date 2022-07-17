import { useEffect, useState } from 'react'

export const useAuthStatus = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        if(user === null){
            setLoggedIn(false)
        } else{
            setLoggedIn(true)
        }

        setCheckingStatus(false)
    }, [user])
    return {loggedIn, checkingStatus}
}