const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.log(err);

    //mogoose bad ObjectId
    if (err.name === "CastError") {
      const message = "Resource not found ";

      error = new Error(message);
      error.statusCode = 404;
    }
    //Mongoose Duplicate key
    if (err.code === 11000) {
      const message = "Duplicate Field value entered ";

      error = new Error(message);
      error.statusCode = 400;
    }
    //Mongoose validation error
    if (err.name === "ValidationError") {
      //here we map the error to the object as it may have many errors
      //and shpw the message for each one
      const message = Object.values(err.error).map((val) => val.message);

      error = new Error(message.join(", "));
      error.statusCode = 400;
    }
    //this is if it is none of the error above we catch it with 500
    res
      .status(error.statusCode || 500)
      .json({ success: false, error: error.message || " Server Error " });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
