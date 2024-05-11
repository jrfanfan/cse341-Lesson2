const express = require('express')
const env = require("dotenv").config()
const mongoose = require('./connectDB/connectMongoose')
const dataRoute = require('./routes/dataRoutes')
const static = require("./routes/static")
const htmlRoute = require('./routes/htmlRoute')
const bodyParser = require("body-parser")
const dataController = require('./controllers/dataControllers')

const app = express()

//Midleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())

// Static index route
app.use(static);
// html route
app.use('/input', htmlRoute);
app.use('/update', htmlRoute);

//route data
app.use('/', dataRoute);


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


