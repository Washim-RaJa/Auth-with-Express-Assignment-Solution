require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDatabase = require('./config/databaseConfig');
const userRoute = require('./routes/userRoute');
const app = express();

const corsOptions = {
    origin: ['http://127.0.0.1:5501','http://localhost:5501'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Authorization'],
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use('/', userRoute)
 
app.listen(process.env.PORT, ()=>{
    connectDatabase();
    console.log(`Server is running at localhost:${process.env.PORT}`);
})


