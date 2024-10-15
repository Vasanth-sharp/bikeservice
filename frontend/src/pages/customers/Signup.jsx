import React from 'react'
import {useNavigate} from "react-router-dom" 

function Signup() {
    const navigate=useNavigate()
    const handleSignup=async(e)=>{
        e.preventDefault()
        const name=e.target[0].value
        const email=e.target[1].value
        const password=e.target[2].value
        const customerData={name,email,password}
        try{
            console.log("request sent")
            const res=await fetch('http://localhost:4000/api/register', {
                method: 'POST',
                body: JSON.stringify(customerData),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
              console.log("response")
              if(res.status===200){
                setTimeout(()=>navigate("/login"),[2000])
              }
              else{
                const msg=await res.json()
                console.log(msg)
              }
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        <form onSubmit={handleSignup}>
        <div className='name'>
        <label>Enter your name</label>
        <input type='text' required/>
        </div>
        <div className="email">
            <label>Enter your email</label>
            <input type='email' required/>
        </div>
        <div className='password'>
            <label>Enter a password</label>
            <input type='password'/>
        </div>
        <button type='submit'>Signup</button>
        </form>
    </div>
  )
}

export default Signup