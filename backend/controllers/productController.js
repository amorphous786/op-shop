import asyncHanlder from 'express-async-handler'
import Product from '../models/productModel.js'

//@desc Fetch all products
// @route GET /api/products

const getProducts = asyncHanlder(async (req,res)=>{
  const products = await Product.find({})
  res.json(products)
});

//@desc Fetch single product
//@route GET /api/products/:id

const getProductById = asyncHanlder(async (req,res)=>{
  const product = await Product.findById(req.params.id);
  if(product){
    res.json(product)
  }
  else{
    res.status(404);
    throw new Error('Product not found')
  }
});

//@desc Add new product
//@route POST /api/products/add
//@access private

const addProduct = asyncHanlder(async (req,res)=>{
  const user = req.user._id
  const product_data = req.body
  console.log(user)
  try{
    // console.log("daddy is here")
    const product = await Product.create({...product_data,user:user})
    // console.log("daddy is here",product)
  if(product){
    res.json(product)
  }
  else{
    res.status(404);
    throw new Error('Product not found')
  }
  }
  catch(error){
    // console.log("erroras",error)
    res.json(error)
  }
});


export {getProductById,getProducts,addProduct}

