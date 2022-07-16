import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import userService from './userService'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false
}

export const getUserInfo = createAsyncThunk('/:userName', async(userName, thunkAPI) => {

    try {
        return await userService.getUserInfo(userName)
    } catch (error) {
        console.log(error)
        
        return thunkAPI.rejectWithValue(error)
    }

    
})



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserInfo.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getUserInfo.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.tweets = action.payload
        })
        .addCase(getUserInfo.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.tweets = action.payload
        })
    }
})



export const {reset} = userSlice.actions
export default userSlice.reducer