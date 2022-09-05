//Import modules
const express = require('express');
const router = express.Router();



router.get('/dogs', dogsController.getDogPics)

module.exports = router