const { json } = require('body-parser');
const dataModels = require('../models/dataModels')




// Add data
const postData = async (req, res) => {
    try {
      const data = await dataModels.create(req.body)
      data;
      res.status(201).json(data);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
    }
}

//Get data 
const findData = async (req, res) => {
  try {
    const data = await dataModels.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({message: error.message})
  }

}

//Get data by id
const findDataById = async (req, res) => {
  try {
    const {id} = req.params;
    const data = await dataModels.findById(id);
    res.json(data);
  }catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }

}
//Update data by id
const updateDataById = async (req, res) => {
  try {
    const {id} = req.params;
    const data = await dataModels.findByIdAndUpdate(id, req.body)
    //We can find any data
    if (!data) {
      return res.status(404).json({message: `cannot find any data with ID ${id}`})
    }
    const updateData = await dataModels.findById(id);
    res.status(200).json(data);
  }
  catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
}

// Delete data by id
const deleteDataById = async (req, res) => {
  try {
    const {id} = req.params;
    const db = await dataModels.findByIdAndDelete(id);
    db.orders.deleteOne( { _id: ObjectId(id) } );
   } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})

   }
}


module.exports = {postData, findData, findDataById, updateDataById, deleteDataById}    