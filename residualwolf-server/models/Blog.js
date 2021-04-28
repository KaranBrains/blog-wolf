const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String
    },
    imageUrl: {
        type: String
    },
    videoUrl: {
        type: String
    },
    description: {
        type: String
    },
    author: {
        type: String
    }
},
    { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema, 'blogs');