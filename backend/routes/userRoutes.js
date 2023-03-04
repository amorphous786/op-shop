import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const router = express.Router()

router.get('/',asyncHandler(async (req,res)=>{
  let users  = await User.find({})
  res.json(users)
}))

export default router;