const express = require('express')
const router = express.Router()
const PostCtrl = require('../controllers/postController')
const { protect } = require('../middleware/authMiddleware')

router
    .route('/')
    .get(PostCtrl.getAllPosts)
    .post(protect, PostCtrl.createPost)

router.route('/:id/comments').post(protect, PostCtrl.createPostComment)

router
    .route('/:id')
    .get(PostCtrl.getPostById)
    .put(protect, PostCtrl.updatePost)
    .delete(protect, PostCtrl.deletePost)

module.exports = router