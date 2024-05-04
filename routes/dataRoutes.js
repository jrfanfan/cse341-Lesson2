const express = require('express')
const dataControllers = require('../controllers/dataControllers')
const router = express.Router()

//Route add data post
router.post('/', dataControllers.postData )

//Route find data get
router.get('/', dataControllers.findData)
  
//Route get data by id
router.get('/:_id', dataControllers.findDataById)
  
//Route to update data by id
router.put('/:_id', dataControllers.updateDataById)
  
  // Route to delete a data
  router.delete('/:_id', dataControllers.deleteDataById)

module.exports= router;