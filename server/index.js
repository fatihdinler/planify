const app = require('./app')
const connectDB = require('./db/database')
const dotenv = require('dotenv')

dotenv.config()
const PORT = process.env.PORT || 3446

// Uncaught exception
process.on('uncaughtException', (err) => {
    console.log('ERROR !', err.message)
    console.log('Shutting Down the Server for Handling Uncaught Exception!')
    // server.close(() => {
    //     process.exit(1)
    // })
})

// Config
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({
        path: 'server/config/.env'
    })
}

// Connect DB
connectDB()

// Create a server
const server = app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`)
})

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log('ERROR !', err.message)
    console.log('Shutting Down the Server for Unhandled Promise Exception!')
    server.close(() => {
        process.exit(1)
    })
})