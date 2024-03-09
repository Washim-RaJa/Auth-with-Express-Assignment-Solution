require('dotenv').config()

const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL

const connectDatabase = ()=>{
    mongoose.connect(MONGODB_URL)
            .then((data)=> console.log(`Mongodb connected with server: ${data.connection.host}`))
            .catch((error)=>console.log(`Error while connecting to Database ${error.message}`))
}

module.exports = connectDatabase;