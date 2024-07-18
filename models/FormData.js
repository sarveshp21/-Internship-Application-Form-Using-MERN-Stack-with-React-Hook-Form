const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
 
const formDataSchema = new Schema({ 
    firstName: { type: String, required: true }, 
    lastName: { type: String, required: true }, 
    email: { type: String, required: true }, 
    contact: { type: String, required: true }, 
    gender: { type: String, required: true }, 
    url1: { type: String, required: true }, 
    url2: { type: String, required: true }, 
    selectedOption: { type: String, required: true }, 
    about: { type: String }, 
    resume: { type: String }, 
}, { versionKey: false, timestamps: true }
); 
 
const FormData = mongoose.model('FormData', formDataSchema); 
module.exports = FormData; 