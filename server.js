const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
const formDataSchema = require('./models/FormData.js');

const app = express(); 
const port = 5000; 

// Middleware 
app.use(cors()); 
app.use(bodyParser.json());

// Connect to MongoDB 
mongoose.connect('mongodb://localhost:27017/mydatabase'); 
const db = mongoose.connection;

db.on("error", () => {
    console.log("Error while connecting to DB");
});

db.once("open", () => {
    console.log("connected to DB!!");
    // init(req.body);
});

async function insertData(data) {
    await formDataSchema.create(data);
}

app.get('/intro', (req, res) => {
    res.send("Hello Sarvesh");
});

app.post("/",  (req, res) => {
    console.log(req.body);
    const { firstName, lastName, email, contact, gender, url1, url2, selectedOption, about } = req.body;
    const resume = req.file ? req.file.path : null; // Save the file path
    const data = {
        firstName, 
        lastName, 
        email, 
        contact, 
        gender, 
        url1, 
        url2, 
        selectedOption, 
        about, 
        resume
    };
    insertData(data);
    res.send("Done");
  });

// const formDataRouter = require('./routes/FormData'); 
// app.use('/formdata', formDataRouter);
// Start server 

app.listen(port, () => { 
console.log(`Server is running on port: ${port}`); 
});