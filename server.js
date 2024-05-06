const express = require('express')
const env = require("dotenv").config()
const mongoose = require('./connectDB/connectMongoose')
const dataRoute = require('./routes/dataRoutes')
const static = require("./routes/static")


const app = express()

//Midleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Static route
app.use(static);

//route data
app.use('/data', dataRoute);

mongoose();

//Process .env
const PORT = process.env.PORT;
const HOST = process.env.HOST;



/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(PORT, () => {
  console.log(`app listening on: ${HOST}:${PORT} `)
})


