import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Counter() {
    const[count,setcount]=useState(0)
    useEffect(()=>{
        document.title=`you clicked ${count} times`
    })
  return (
    <div>
        
        <button
        onClick={()=>setcount(count+1)}
        > 
            click {count} times
        </button>
    </div>
  )
}

export default Counter