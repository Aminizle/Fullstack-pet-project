//Model import
const doggos = require('../models/Doggos')
// Import fetch 
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));


module.exports = {
  
    //TODO: Get breed from form selection
    getDogPics: async (req, res) => {
    const url = `https://dog.ceo/api/breed/hound/images`
    res.render('dogs.ejs')
    try {
      let response = await fetch(url)
      response = await response.json()
      res.status(200).json(response)
      console.log(response);
      res.redirect('/dogs')
    } catch (err) {
      console.log(err)
      res.status(500).json({msg: `Internal Server Error`})
    }
  }
}