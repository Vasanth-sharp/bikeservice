const express = require('express')
const routerr = express.Router()

const { signup, signin, setService } = require('../controller/controller')

routerr.post('/register',signup)
routerr.post('/login',signin)
routerr.post('/service',setService)

module.exports = routerr