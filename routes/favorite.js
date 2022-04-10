const router = require('express').Router()
const {
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin 
} = require('./verifyToken')
const Favorite = require('../models/Favorite')


// Create
router.post('/', verifyToken, async (req,res) => {
    const newFavorite = new Favorite(req.body)

    try{
        const savedFavorite = await newFavorite.save()
        res.status(200).json(savedFavorite)
    } catch(err) {
        res.status(500).json(err)
    }
})


// Update
router.put('/:id', verifyTokenAndAuthorization, async (req,res) => {
    try {
        const updatedFavorite = await Favorite.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedFavorite)
    } catch(err) {
        res.status(500).json(err)
    }
})


// Delete
router.delete('/:id', verifyTokenAndAuthorization, async (req,res) => {
    try {
        await Favorite.findByIdAndDelete(req.params.id)
        res.status(200).json('Item in your favorite item has been deleted')
    } catch(err) {
        res.status(500).json(err)
    }
})


// Get UserFavorite
router.get('/find/:userId', verifyTokenAndAuthorization, async (req,res) => {
    try {
        const favorite = await Favorite.findOne({ userId: req.params.userId })
        res.status(200).json(favorite)
    } catch(err) {
        res.status(500).json(err)
    }
})


// Get All Favorite Items
router.get('/', verifyTokenAndAdmin, async (req,res) => {
    try {
        const favorite = await Favorite.find()
        res.status(200).json(favorite)
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router