import React from 'react'

function Services() {
    const handleService=(e)=>{
        e.preventDefault()
        console.log(e.target[0].value)
    }
  return (
    <div>
        <form onSubmit={handleService}>
            <label>Select the Service</label>
            <select>
                <option value="">--select--</option>
                <option value="oil">Oil change</option>
                <option value="general">General Service</option>
                <option value="water">Water Service</option>
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