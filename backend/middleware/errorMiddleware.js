const notFound = (req,res,next)=>{
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)//parameter is boolean if error exist then true then go to very next middleware
}

const errorHandler = (err,req,res,next)=>{
  const statusCode = res.statusCode === 200?500:res.statusCode
  //200 statusCode= 500
  // 402 statusCode =402
  // 500 server error
  // 404 page not found
  res.status(statusCode)
  res.json({
    message:err.message,
    stack:process.env.NODE_ENV === 'production'? null: err.stack
  })
  // next(jumptonextmiddleware)
}

export {notFound,errorHandler};