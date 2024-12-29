const { default: mongoose } = require("mongoose")

// const mongoose = require('mongoose');

// Define the Person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    work:{
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    salary:{
        type: Number,
        required: true
    }
});

// Create Person model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;