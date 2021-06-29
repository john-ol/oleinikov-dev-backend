const { check } = require('express-validator')

const checkFormData = () => {
  return [
    check('email', 'Invalid e-mail').isEmail(),
    check('name', 'Name should be at least 2 characters').isLength({
      min: 2,
    }),
    check('message', 'Message should be at least 2 characters').isLength({
      min: 2,
    }),
  ]
}

module.exports = checkFormData
