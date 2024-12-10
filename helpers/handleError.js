function handleError({ error, req, res, statusCode = 500 }) {
  return res.status(statusCode).json({ error })
}

export { handleError }
