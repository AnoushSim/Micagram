const mongoose = require('mongoose');
const micagram = mongoose.createConnection('mongodb://127.0.0.1:27017/micagram');
const shortid = require('shortid');

function generateAPIKey () {
    return shortid.generate() + '-' + shortid.generate() + '-' + shortid.generate() ;
}
const UsersSchema = new mongoose.Schema({
    key: {
        type: String,
        default: generateAPIKey
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
        index:true
    },
    age: {
        type: Number
    },
    password: {
        type: String,
        minlength: 4
    },
    created: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
});


module.exports = UsersSchema;
