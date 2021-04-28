const Blog = require('../../models/Blog');
const Comment = require('../../models/Comment');
const mongoose = require('mongoose');

exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({ blogs, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}

exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.aggregate([{
            $match: {
                _id: mongoose.Types.ObjectId(req.params.id)
            }
        }]).lookup({
            from: "comments",
            localField: "_id",
            foreignField: "blogId",
            as: "comments"
        })
        // console.log(blog)
        res.status(200).json({ blog: blog[0], status: true });
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}

exports.createBlog = async (req, res) => {
    try {
        console.log(req.body)
        let path;
        const host = req.headers.host;
        if (host === 'localhost:5000') {
            path = 'http://' + host;
        } else {
            path = 'https://' + host;
        }
        const { title, description } = req.body;
        const file = req.file;
        // if (!file) return res.status(400).json({ msg: 'no file selected', status: false });
        let blogObj = {};
        if (title) blogObj.title = title;
        if (file) blogObj.imageUrl = path + '/uploads/' + file.filename;
        if (description) blogObj.description = description;
        const blog = await Blog.create(blogObj);
        res.status(200).json({ blog, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}

// exports.updateBlog = async (req, res) => {
//     try {
//         const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.status(200).json({ blog, status: true });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ msg: 'internal server error', status: false });
//     }
// }

// exports.deleteBlog = async (req, res) => {
//     try {
//         await Blog.findByIdAndDelete(req.params.id);
//         res.status(200).json({ msg: 'Deleted!', status: true });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ msg: 'internal server error', status: false });
//     }
// }

exports.createComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(200).json({ comment, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}