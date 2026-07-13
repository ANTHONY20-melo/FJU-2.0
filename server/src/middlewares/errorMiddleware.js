export function errorMiddleware(error, req, res, next) {
  console.error(error);

  const statusCode = error.statusCode || 500;
  const message = statusCode === 500 ? "Erro interno do servidor." : error.message;

  return res.status(statusCode).json({
    message,
  });
}
