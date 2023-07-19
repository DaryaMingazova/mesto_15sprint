const errorHandler = (err, req, res, next) => {
  if (!err.statusCode) {
    res.status(500).send({ message: 'Произошла ошибка на сервере' });
  }
  res.status(err.statusCode).send({ message: err.message });
  next();
};

module.exports = errorHandler;
