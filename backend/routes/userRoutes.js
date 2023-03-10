import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { authUser, getUserProfile, registerUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';


const router = express.Router()

router.route('/').post(registerUser)
router.post('/login',authUser)
router.route('/profile').get(protect, getUserProfile)

export default router;