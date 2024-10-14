import React from 'react'

function Signup() {
    const handleSignup=(e)=>{
        e.preventDefault()
        const name=e.target[0].value
        const email=e.target[1].value
        const pass=e.target[2].value
        console.log(name,email,pass)
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