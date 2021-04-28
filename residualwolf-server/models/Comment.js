const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    blogId: {
        type: mongoose.Types.ObjectId,
        ref: 'Blog'
    },
    text: {
        type: String
    }
},
    { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema, 'comments');