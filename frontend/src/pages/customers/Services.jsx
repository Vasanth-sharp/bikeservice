import React from 'react'
import { useLocation } from 'react-router-dom'

function Services() {
    const location=useLocation()
    const email=location.state?.email 
        // console.log(email)
    const handleService=async (e)=>{
        e.preventDefault()
        const servicename=e.target[0].value
        const info={email,servicename}
        try{
            console.log("request sent")
            const res=await fetch('http://localhost:4000/api/service', {
                method: 'POST',
                body: JSON.stringify(info),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
              console.log("response")
              if(res.status===200){
                console.log("Mail is sended to Mechanic")
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
        <form onSubmit={handleService}>
            <label>Select the Service</label>
            <select>
                <option value="">--select--</option>
                <option value="oil change">Oil change</option>
                <option value="general service">General Service</option>
                <option value="water wash">Water Service</option>
            </select>
            <button type='submit'>Submit</button>
        </form>
        <div className='status'>
            <p>Yoour vehicle in progress</p>
        </div>
    </div>
  )
}

export default Services