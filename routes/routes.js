const express = require('express')
const checkFormData = require('../middleware/checkFormData')
const checkToken = require('../middleware/checkToken')
const { getData } = require('../controllers/getData')

const route = express.Router()
route.post('/telegram/getdata', checkToken, checkFormData(), getData)

module.exports = route
