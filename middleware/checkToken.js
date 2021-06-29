const checkToken = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }
  const { token } = req.body
  if (!token) {
    return res.status(400).json({ message: 'Please, pass recaptcha' })
  }
  next()
}

module.exports = checkToken
