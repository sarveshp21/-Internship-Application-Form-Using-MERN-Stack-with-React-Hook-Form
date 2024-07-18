const router = require('express').Router(); 
let FormData = require('../models/FormData'); 
router.route('/add').post((req, res) => { 
const newFormData = new FormData(req.body); 
newFormData.save() 
.then(() => res.json('Form data added!')) 
.catch(err => res.status(400).json('Error: ' + err)); 
}); 
module.exports = router;