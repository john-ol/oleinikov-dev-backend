const express = require('express')
const { getData } = require('../controllers/getData')

const route = express.Router()
route.post('/telegram/getdata', getData)

module.exports = route
