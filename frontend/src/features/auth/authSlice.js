import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import authService from './authService'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
}

export const register = createAsyncThunk('/register', async(user, thunkAPI) => {

    try {
        return await authService.register(user)
    } catch (error) {
        console.log(error)
        
        return thunkAPI.rejectWithValue(error)
    }

    
})

export const login = createAsyncThunk('/login', async(user, thunkAPI) => {

    try {
        return await authService.login(user)
    } catch (error) {
        console.log(error)
        
        return thunkAPI.rejectWithValue(error)
    }

    
})

export const logout = createAsyncThunk('/logout', async () => {
    await authService.logout()
})


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