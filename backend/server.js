const express = require('express')
const app= express()
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

app.use(cors()) 
app.use(express.json())

const routerr = require('./route/routes')

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Listening port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})

app.use('/api',routerr)

