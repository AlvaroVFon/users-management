function handleResponse({ req, res, data, statusCode = 200 }) {
  return res.status(statusCode).json({
    statusCode,
    data,
  })
}

export { handleResponse }
