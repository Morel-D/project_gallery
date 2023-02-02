const express = require('express');
const mongoose = require('mongoose');
const Info = require('./models/model');


// start express app 
const app = express();

// View ejs files
app.set('view engine', 'ejs');

// access all style files in the public folder
app.use(express.static(__dirname));

app.use(express.urlencoded({extended: true}))


const dbUrl = 'mongodb://localhost:27017/crud_operation';

mongoose.connect(dbUrl).then(() => {
    // listen to the app on port 3000
    app.listen(3000);
    
    console.log('Connection esablished');
}).catch((error) => {
    console.log('Connection failed', error);
})



// Read Data
app.get('/', (req, res) => {

    Info.find().sort()
        .then((results) => {
        res.render('Index', {infos : results});
        }).catch((error) => {
        console.log('Error could not read data', error)
    })    
})


// Create Data
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


// Delete Record
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
app.get('/Record/:id/Edit', (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);

    Info.findById(id)
        .then(result => {
        res.render('Edit', {info: result})
        }).catch(error => {
            console.log('Something went wrong bro...', error);
    })
})



// Update records 
app.post('/Record/:id/Edit', (req, res) => {
    
    const id = mongoose.Types.ObjectId(req.params.id);

    const infoBody = {
        userName: req.body.userName,
        dateOfBirth: req.body.dateOfBirth,
        residence: req.body.residence,
        gender: req.body.gender,
        proffession: req.body.proffession,
        email: req.body.email
    }

    Info.findByIdAndUpdate(infoBody, req.body.id, { new: true})
        .then(result => {
            res.redirect('/'+id);
            console.log('Update succcesfull')
        }).catch((error) => {
            console.log('Could not ipdate', error);
    })
})


// search
app.post('/search/:fullName', (req, res) => {
    let record = req.body.info.trim();
    Info.find({ fullName: { $regex: new RegExp('^' + record + '.*', 'i') } }).exec()
        .then((element) => {
            res.send({ info: element });
    })

})


// another search 

// app.get('/search/:fullName', (req, res) => {
    
//     let regex = new RegExp(req.params.fullName, 'i');

//     Info.find({ fullName: regex })
//         .then((result) => {
//             res.json(result)
//         }).catch((error) => {
//             console.log('Something just occured', error);
//     })
// })



 