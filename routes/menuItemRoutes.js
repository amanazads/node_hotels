const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

// POST route to add a menu item
router.post('/', async (req, res) => {

    try {
        const data = req.body // Assuming the request body contains the person data

        // Create a new Person document using the Mongoose model
        const newMenu = new MenuItem(data);

        // Save the new person to the database
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// GET method to get the menu item
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err)
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })
    }
})
// comment for testing

module.exports = router;