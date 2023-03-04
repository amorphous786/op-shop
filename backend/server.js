// we use require() method when in package.js file we haven't set type:"module" it is es6 import way
// const express = require('express');
// const  products  = require('./data/products');
// const cors = require("cors")
import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'
import cors from 'cors'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js'
dotenv.config()
connectDB()

const app = express();
app.use(cors())



app.get('/', (req, res) => {
      res.send('Hello World!');
});
app.use('/api/users',userRoutes)
app.use('/api/products',productRoutes)
app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
      console.
      log(`Example app listening in ${process.env.NODE_ENV}on port  ${PORT}!`.
      yellow.bold);
});

//Run app, then load http://localhost:5000 in a browser to see the output.