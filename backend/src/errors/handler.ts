import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);

  return res.status(508).json({ message: 'Internal server error' });
};

export default errorHandler;