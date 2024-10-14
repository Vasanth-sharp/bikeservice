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
    require:true
},
password:{
    type:String,
    require:true
},
email : {
    type:String,
    require:true
},
services:[serviceSchema]


},{timestamps:true})


module.exports = mongoose.model("Auto",bikeSchema)