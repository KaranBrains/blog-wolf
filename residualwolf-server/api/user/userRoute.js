const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    password: {
        type: String
    },
    role: {
        type: String
    }
},
    { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema, 'blogs');