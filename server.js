const express = require('express')
const env = require("dotenv").config()
const mongoose = require('./connectDB/connectMongoose')
const Data = require('./models/dataModels')
const app = express()

//Midleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Route get data
app.get('/datas', async (req, res) => {
  try {
    const datas = await Data.find({});
    res.status(200).json(datas);
    console.log(datas)
  } catch (error) {
    res.status(500).json({message: error.message})
  }

})

//Route get data by id

app.get('/data/:_id', async (req, res) => {
  try {
    const {_id} = req.params;
    const data = await Data.findById(_id);
    res.status(200).json(data);
    console.log(data);
  }catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

//Route to update data
app.put('/data/:_id', async (req, res) => {
  try {
    const {_id} = req.params;
    const data = await Data.findByIdAndUpdate(_id, req.body)
    //We can find any data
    if (!data) {
      return res.status(404).json({message: `cannot find any data with ID ${_id}`})
    }
    const updateData = await Data.findById(_id);
    console.log(updateData);
    res.status(200).json(data);
  }
  catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

// Route to delete a data
app.delete('/data/:_id', async (req, res) => {
  try {
    const {_id} = req.params;
    const data = await Data.findByIdAndDelete(_id);
    //We can find any data
    if (!data) {
      return res.status(404).json({message: `cannot find any data with ID ${_id}`})
    }
    res.status(200).json(data);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

//Route post
app.post('/datas', async (req, res) => {
  try {
    const data = await Data.create(req.body)
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
  })

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


