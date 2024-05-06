const express = require('express')
const dataControllers = require('../controllers/dataControllers')
const router = express.Router()

//Route add data post
router.post('/data', dataControllers.postData )

//Route find data get
router.get('/data', dataControllers.findData)
  
//Route get data by id
router.get('/data:_id', dataControllers.findDataById)
  
//Route to update data by id
router.put('/data:_id', dataControllers.updateDataById)
  
  // Route to delete a data
  router.delete('/data:_id', dataControllers.deleteDataById)

module.exports= router;