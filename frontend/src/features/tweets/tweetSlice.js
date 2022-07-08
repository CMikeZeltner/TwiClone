import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import tweetService from './tweetService'



const initialState = {
    tweets: [],
    isError: false,
    isSuccess: false,
    isLoading: false
}

export const createTweet = createAsyncThunk('/tweet', async(userIDMessage, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.user.token
        return await tweetService.createTweet(userIDMessage, token)
    } catch (error){
        //console.log(error)
        return thunkAPI.rejectWithValue(error)
    }
})

export const getUserTweets = createAsyncThunk('/:userName', async(userName, thunkAPI) => {
    const newUserName = userName.replace('/', '')

    try {
        return await tweetService.getUserTweets(newUserName)
    } catch (error) {
        
        
        return thunkAPI.rejectWithValue(error)
    }

    
})

export const getSingleTweet = createAsyncThunk('/:userName/:id', async(userNameTweetID, thunkAPI) => {

    try {
        return await tweetService.getSingleTweet(userNameTweetID)
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error)
    }

    
})

export const getFollowedTweets = createAsyncThunk('/home', async(userID, thunkAPI) => {

    try {
        return await tweetService.getFollowedTweets(userID)
    } catch (error) {
        
        return thunkAPI.rejectWithValue(error)
    }

    
})


//
// export const likeTweet = createAsyncThunk('/:username/:id/like', async(userID, tweetID, thunkAPI) => {

//     const token = thunkAPI.getState().auth.user.token

//     try {
//         return await tweetService.likeTweet(userID, tweetID, token)
//     } catch (error) {
//         console.log(error)
//     }
// })







export const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createTweet.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createTweet.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.tweets = action.payload
        })
        .addCase(createTweet.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getUserTweets.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getUserTweets.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.tweets = action.payload
        })
        .addCase(getUserTweets.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getSingleTweet.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getSingleTweet.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.tweets = action.payload
        })
        .addCase(getSingleTweet.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getFollowedTweets.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getFollowedTweets.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.tweets = action.payload
        })
        .addCase(getFollowedTweets.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })

    }
})





export const {reset} = tweetSlice.actions
export default tweetSlice.reducer