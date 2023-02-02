const mongoose = require('mongoose');
const modelSchema = mongoose.Schema;

const info = new modelSchema(
    {
        fullName: String,
        dateOfBirth: String,
        age: Number,
        residence: String,
        gender: String,
        proffession: String,
        email: String
    }, { timestamps: true }
)

const information = mongoose.model('information', info);

module.exports = information;