const express = require('express');
const mongoose = require('mongoose');
const Info = require('./models/model');


// start express app 
const app = express();

// View ejs files
app.set('view engine', 'ejs');

// access all style files in the public folder
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({extended: true}))


const dbUrl = 'mongodb://localhost:27017/crud_operation';

mongoose.connect(dbUrl).then(() => {
    // listen to the app on port 3000
    app.listen(3000);
    
    console.log('Connection esablished');
}).catch((error) => {
    console.log('Connection failed', error);
})



// Read Data (CRUD)
app.get('/', (req, res) => {

    Info.find().sort()
        .then((results) => {
        res.render('Index', {infos : results});
        }).catch((error) => {
        console.log('Error could not read data', error)
    })    
})


// Create Data (CRUD)
app.post('/', (req, res) => {

    const information = new Info(req.body);
    information.save();

    Info.find()
        .then((results) => {
        res.redirect('/')
        }).catch(error => {
            console.log('Error could not create data', error);
    })
})


// View Single Data 
app.get('/Record/:id', (req, res) => {

    const id = mongoose.Types.ObjectId(req.params.id);

    Info.findById(id)
        .then((results) => {
            res.render('View', {info : results});
    })
})


// Delete Record (CRUD)
app.delete('/Record/:id', (req, res) => {
    
    const id = mongoose.Types.ObjectId(req.params.id);

    Info.findByIdAndRemove(id)
        .then((results) => {
        res.json({ redirect: '/' })
        }).catch((error) => {
            console.log('Error occured ', error);
    })
})


// Edit records 
app.get('/Record/Edit/:id', (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    console.log(id);

    Info.findById(id)
        .then(result => {
        res.render('Edit', {info: result})
        }).catch(error => {
        console.log(error);
    })
})




// Update the records (CRUD)

app.post('/Record/Edit/:id', (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);

    const records = 
    {
        fullName: req.body.fullName,
        dateOfBirth: req.body.dateOfBirth,
        age: req.body.age,
        residence: req.body.residence,
        gender: req.body.gender,
        proffession: req.body.proffession,
        email: req.body.email
    }

    Info.findByIdAndUpdate(id, records)
        .then(() => {
        res.redirect('/')
        }).catch((error) => {
            console.log("Something went wrong ", error);
    })
})


// search bar

app.post('/search', (req, res) => {
    let record = req.body.info.trim();
    Info.find({ fullName: { $regex: new RegExp('^' + record + '.*', 'i') } }).exec()
        .then((element) => {
            res.send({ info: element });
    })
})



 