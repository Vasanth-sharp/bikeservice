const express = require('express')
const routerr = express.Router()

const { signup, signin, setService, statusUpdate, getAll } = require('../controller/controller')

routerr.get('/',getAll)
routerr.post('/register',signup)
routerr.post('/login',signin)
routerr.post('/service',setService)
routerr.patch('/updateStatus',statusUpdate)

module.exports = routerr