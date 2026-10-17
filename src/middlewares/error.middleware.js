const errorMiddleware = (error, req, res, next) => {
  console.error("Error:", error.message);

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.statusCode
      ? error.message
      : "Internal server error"
  });
};

export default errorMiddleware;