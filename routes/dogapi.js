//Import modules
const express = require('express');
const router = express.Router();

//Import controller
const dogsController = require('../controllers/dogs')



router.get('/dogs', dogsController.getDogPics)

module.exports = router