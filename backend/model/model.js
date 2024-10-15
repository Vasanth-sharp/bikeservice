const mongoose = require('mongoose')
const schema = mongoose.Schema

const serviceSchema = new schema({
    sname:{
        type:String,
    },
    status:{
        type:String,
        default:"incomplete"
    }
})


const bikeSchema = new schema({

name:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
email : {
    type:String,
    required:true
},
services:[serviceSchema]


},{timestamps:true})


module.exports = mongoose.model("Auto",bikeSchema)