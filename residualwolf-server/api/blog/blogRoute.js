const router = require('express').Router();
const controller = require('./blogController');

router.get('/blogs', controller.getBlogs);

router.get('/blog/:id', controller.getBlog);

router.post('/blog', controller.createBlog);

router.post('/comment', controller.createComment);

module.exports = router;