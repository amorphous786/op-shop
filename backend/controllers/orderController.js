import asyncHanlder from 'express-async-handler'
import Order from '../models/orderModel.js'



export const addOrderItems = asyncHanlder(async (req,res)=>{
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body
  if(orderItems && orderItems.length === 0){
    res.status(400)
    throw new Error('No Order Items')
    return
  }else{
    res.status()
    const order = new Order({
      orderItems,
      user:req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice
    })
    const createOrder = await order.save()
    res.status(201).json(createOrder)
  }
})