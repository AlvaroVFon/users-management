function isSuperadmin(req, res, next) {
  if (req.user.role !== 'superadmin') {
    console.log('Forbidden')
    return res.status(403).json({ message: 'Forbidden' })
  }
  next()
}

export { isSuperadmin }
