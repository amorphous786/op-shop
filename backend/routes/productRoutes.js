import express from 'express'
import asyncHanlder from 'express-async-handler'
import Product from '../models/productModel.js'
import {
  getProducts,
  getProductById,
  addProduct

} from '../controllers/productController.js'
import { protect } from '../middleware/authMiddleware.js';

//@desc fetch all products
//@route GET /api/products
//@access Public

const router = express.Router()

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
router.route('/add').post(protect,addProduct)
// router.get('/',asyncHanlder(async (req,res)=>{
//   const products = await Product.find({})
//   res.json(products)
// }))

// //@desc Fetch single product
// //@route GET /api/products/:id
// //@access Public
// router.get('/:id',asyncHanlder(async (req,res)=>{
//   const product = await Product.findById(req.params.id)
//   if(product) {
//     res.json(product)
//   }
//   else{
//     res.status(404)
//     throw new Error("You idiot there is no product with this id")
//   }
// }))

export default router
