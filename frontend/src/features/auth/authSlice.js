import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import authService from './authService'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false
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


export const followUser = createAsyncThunk(':userName/follow', async (users, thunkAPI) => {
    
    await authService.followUser(users)

})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.tweets = action.payload
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.tweets = action.payload
        })
        .addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.tweets = action.payload
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.tweets = action.payload
        .addCase(logout.pending, (state) => {
            state.isLoading = true
        })
        .addCase(logout.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.tweets = action.payload
        })
        .addCase(followUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.tweets = action.payload
        })
        .addCase(logout.pending, (state) => {
            state.isLoading = true
        })
        .addCase(followUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.tweets = action.payload
        })
        .addCase(followUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.tweets = action.payload
        })
        })
    }
})





export const {reset} = authSlice.actions
export default authSlice.reducer