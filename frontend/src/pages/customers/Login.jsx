import React from 'react'

function Login() {
    const handleLogin=(e)=>{
        e.preventDefault()
        const email=e.target[0].value
        const pass=e.target[1].value
        console.log(email,pass)
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