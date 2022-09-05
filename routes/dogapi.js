//Import modules
const express = require('express');
const router = express.Router();

// Import fetch 
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));


router.get('/dogs', async(req, res) => {
  const url = 'https://dog.ceo/api/breed/hound/images'
})

try {
  let response = await fetch(url)
  response = await response.json()
  res.status(200).json(response)
} catch (err) {
  console.log(err)
  res.status(500).json({msg: `Internal Server Error`})
}