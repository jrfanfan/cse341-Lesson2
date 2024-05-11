const express = require('express')
const dataControllers = require('../controllers/dataControllers')
const router = express.Router()

//Route add data post
router.post('/data', dataControllers.postData);

//Route find data get
router.get('/data', dataControllers.findData);

//Route get data by ip
router.get('/data/:id', dataControllers.findDataById);

//Route update data by id
router.put('/dataput/:id', dataControllers.updateDataById);

// Delete data by id
router.delete('/datadel/:id', dataControllers.deleteDataById);


module.exports= router;