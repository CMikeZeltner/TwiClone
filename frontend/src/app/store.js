import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import tweetReducer from '../features/tweets/tweetSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tweets: tweetReducer,
        user: userReducer,
    }
})