const Pet = require('../models/petPosts')

module.exports = {
    getPet: async (req, res) => {
        console.log(req.user)
        try {
            const likedCats = await Pet.find({ imageURL: req.body.todoItem, imageBreed: req.body.breed, like: true, userId: req.user.id })
            res.render('cat.ejs', { pets: likedCats, imageURL: req.body.todoItem, imageBreed: req.body.breed, user: req.user })
        } catch (err) {
            console.log(err)
        }
    },
    createPet: async (req, res) => {
        try {
            await Pet.create({ imageURL: req.body.todoItem, imageBreed: req.body.breed, like: req.body.choice, userId: req.user.id })
            console.log('Pet photo has been added!')
            res.redirect('/cat.ejs')
        } catch (err) {
            console.log(err)
        }
    },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    deletePet: async (req, res) => {
        console.log(req.body.todoIdFromJSFile)
        try {
            await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile })
            console.log('Deleted Pet')
            res.json('Deleted It')
        } catch (err) {
            console.log(err)
        }
    }
}    