const auto = require('../model/model')
require('dotenv').config()

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'heathledger323@gmail.com',  
        pass: process.env.KEY
    }
});


const signup = async (req,res)=>{

    const {name,email,password} = req.body

    try{
        const data = await auto.findOne({email})
        if(!data){
            const result = await auto.create({name,email,password})
            res.status(200).json(result)
        }
        else{
            res.status(400).json({message:"email already exists"})
        }
    }
    catch(err){
        res.status(500).json({error:err.message})
    }

}


const signin = async (req,res)=>{
    const {email,pass} = req.body
    try{
        const data = await auto.findOne({email})
        // console.log(data)
        if(!data){
            return res.status(400).json({message:"invalid email"})
        }
        if(data.password === pass){
            return res.status(200).json(data)
            
        }
        else{
            return res.status(400).json({message:"invalid password"})
        }
    }
    catch(err){
        return res.status(500).json({error:err.message})
    }
}

const setService = async (req,res)=>{

    const {email,servicename} = req.body
    try{
        const data = await auto.findOneAndUpdate({email:email},{
            $push:{
                services:{
                    sname : servicename
                }
            }
        })
        let mailOptions = {
            from: "heathledger323@gmail.com",
            to: "vasanthakumarotp@gmail.com",
            subject: "Test Email",
            html: `<!DOCTYPE html>
          <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f7f7f7;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 500px;
                margin: 30px auto;
                background-color: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
              .header {
                font-size: 18px;
                font-weight: bold;
                color: #333;
                text-align: center;
                margin-bottom: 20px;
              }
              .content {
                color: #555;
                line-height: 1.6;
              }
          
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">Welcome, ${data.name}!</div>
              <div class="content">
                <p>Thank you for booking our service! Your booking for <strong>${servicename}</strong> on <strong>${new Date(Date.now()).toLocaleString()} is confirmed.</p>
                <p>We look forward to serving you soon!</p>
              </div>
            </div>
          </body>
          </html>
          `,
          };
          
        transporter.sendMail(mailOptions);

        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
} 

const getAll = async (req,res)=>{
  try{
    const data = await auto.find({})
    res.status(200).json(data)
  }
  catch(err){
    res.status(500).json({error:err.message})
  }
}

const statusUpdate = async (req,res)=>{
  const {email,status,sname} = req.body
  try{
    const data  = await auto.findOneAndUpdate({email:email,"services.sname":sname},{
      $set :{
      
        "services.$.status":status
      }},{      
        new : true
      })

    res.status(200).json(data)

  }
  catch(err){
    res.status(500).json({message:err.message})
  }
}




module.exports  = {signup,signin,setService,statusUpdate,getAll}