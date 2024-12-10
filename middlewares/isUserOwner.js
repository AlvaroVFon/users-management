function isUserOwner(req, res, next) {
  if (req.user.id !== req.params.id && req.user.role !== 'admin' && req.user.role !== 'superadmin') {
    return res.status(403).json({ message: 'Forbidden' })
  }
  next()
}

export { isUserOwner }
