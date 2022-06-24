const express = require('express')
const { connect } = require('mongoose')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/tweetRoutes'))
app.use('/', require('./routes/userRoutes'))


app.listen(5000, () => {
    console.log('Listening on port 5000!')
})