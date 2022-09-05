// Import fetch 
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));


exports.getDogPics = async (req, res) => {
  
  const url = `https://dog.ceo/api/breed/hound/images`

  try {
    let response = await fetch(url)
    response = await response.json()
    res.status(200).json(response)
    console.log(response);
  } catch (err) {
    console.log(err)
    res.status(500).json({msg: `Internal Server Error`})
  }
}
