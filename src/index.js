const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./dal/db')
db.connect()
const userRouter = require('./routes/user.router')
const carRouter = require('./routes/car.router')
const cors = require('cors')
app.use(cors())

app.use(express.json())
// app.use(express.urlencoded())
app.use('/car', carRouter)
app.use('/user', userRouter)
app.listen(2500,() => {console.log("*** server is UP ***\nport:2500");});
