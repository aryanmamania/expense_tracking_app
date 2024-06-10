const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    password:{
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Login', LoginSchema)