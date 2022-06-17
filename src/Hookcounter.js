import React from 'react'
import { useState } from 'react'

function Hookcounter() {
    const [name,setname]=useState({firstname:"",lastname:""})
  return (
  <form>
      <input
      type="text"
      value={name.firstname}
      onChange={e=>setname({...name,firstname:e.target.value})}

      />
   <input
      type="text"
      value={name.lastname}
      onChange={e=>setname({...name,lastname:e.target.value})}
      
      />
      <h2>your firstname is -{name.firstname}</h2>
      <h2>your lastname is -{name.lastname}</h2>
      
  </form>
  )
}

export default Hookcounter