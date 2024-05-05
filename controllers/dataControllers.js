const dataModels = require('../models/dataModels')
// Add data
const postData = async (req, res) => {
    try {
      const data = await dataModels.create(req.body)
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
    }
    }

//Route find data get
const findData = async (req, res) => {
    try {
      const datas = await dataModels.find({});
      res.status(200).json(datas);
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  
}
//Route get data by id
const findDataById = async (req, res) => {
    try {
      const {_id} = req.params;
      const data = await dataModels.findById(_id);
      res.status(200).json(data);
    }catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
    }
  
}
//Route to update data
const updateDataById = async (req, res) => {
    try {
      const {_id} = req.params;
      const data = await dataModels.findByIdAndUpdate(_id, req.body)
      //We can find any data
      if (!data) {
        return res.status(404).json({message: `cannot find any data with ID ${_id}`})
      }
      const updateData = await dataModels.findById(_id);
      res.status(200).json(data);
    }
    catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
    }
  }
// Route to delete data by id
const deleteDataById = async (req, res) => {
    try {
      const {_id} = req.params;
      const data = await dataModels.findByIdAndDelete(_id);
      //We can find any data
      if (!data) {
        return res.status(404).json({message: `cannot find any data with ID ${_id}`})
      }
      res.status(200).json(data);
  
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
    }
  }
module.exports = {postData, findData, findDataById, updateDataById, deleteDataById}    