const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(data => {
        console.log(`mongoDB Connected with ${data.connection.host}`)
    }).catch(error => console.log('database.js -> ERROR !', error.message))
}

module.exports = connectDB