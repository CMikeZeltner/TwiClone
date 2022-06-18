const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Connected to DB: ${conn.connection.host}`)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB