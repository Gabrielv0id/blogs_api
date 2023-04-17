module.exports = (message, statusCode) => {
  const error = new Error(message);
  error.name = 'CustomError';
  error.statusCode = statusCode || 500;
  error.getStatusCode = () => this.statusCode;
  return error;
};
