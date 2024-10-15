import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate()
    const handleLogin=async (e)=>{
        e.preventDefault()
        const email=e.target[0].value
        const pass=e.target[1].value
        const customerData={email,pass}
        try{
            console.log("request sent")
            const res=await fetch('http://localhost:4000/api/login', {
                method: 'POST',
                body: JSON.stringify(customerData),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
              console.log("response")
              if(res.status===200){
                setTimeout(()=>{navigate("/services",{state:{email}})},[2000])
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
        <form onSubmit={handleLogin}>
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

export default Login