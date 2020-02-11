const Joi = require('joi'); 
const mongoose = require('mongoose'); 

const Graduate = mongoose.model('Graduate', new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
    }, 
    email: {
        type: String,
        unique: true,
        minlength: 5, 
        maxlength: 255,
    }, 
    dateOfGraduation: { 
        type: String, 
        required: true
    }, 
    bio: {
        type: String, 
        required: true, 
        minlength: 10, 
        maxlength: 1000
    }
})); 

function validateGraduate(graduate) {
    const schema = {
        name: Joi.string().required(), 
        email: Joi.string().min(5).max(255).required().email(),
        dateOfGraduation: Joi.string().required(),
        bio: Joi.string().min(10).max(1000).required()
    }
    return Joi.validate(graduate, schema);
}

exports.Graduate = Graduate; 
exports.validate = validateGraduate;