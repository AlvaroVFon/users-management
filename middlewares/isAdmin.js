function isAdmin(req, res, next) {
  if (req.user.role !== 'admin' && req.user.role !== 'superadmin') {
    return res.status(403).send('Access denied.')
  }

  next()
}

export { isAdmin }
