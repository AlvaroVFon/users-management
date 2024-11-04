function paginationMiddleware (req, res, next) {
  const { page = 1, limit = 10 } = req.query
  const skip = (page - 1) * limit
  req.pagination = { limit, skip, page }
  next()
}

export { paginationMiddleware }
