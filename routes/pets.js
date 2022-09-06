const express = require('express')
const router = express.Router()
const PetsController = require('../controllers/pets')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, PetsController.getPet)

router.post('/createPet', PetsController.createPet)

// router.put('/markComplete', PetsController.markComplete)

router.get('/getChoice', PetsController.getChoice)

router.delete('/deletePet', PetsController.deletePet)

module.exports = router