const express = require('express')
const router = express.Router()
const UserCtrl = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('register', UserCtrl.registerUser)

router.post('/login', UserCtrl.authUser)

router
    .route('/profile')
    .get(protect, UserCtrl.getUserProfile)
    .put(protect, UserCtrl.updateUserProfile)

module.exports = router