import React from 'react'
import { useState } from 'react'

function Hoook4() {
    const[item,setitem]=useState([])
const additem=()=>{
    setitem([...item,{
        id:item.length,
        value:Math.floor(Math.random()*10) + 1 
    }])
}
  return (
    <div>
        <button onClick={additem}>add a number</button>
        <ul>
            {item.map(item=>(
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    </div>
  )
}

export default Hoook4