import {createSlice} from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.user = null
        }
    }
})



export const {reset} = authSlice.actions
export default authSlice.reducer