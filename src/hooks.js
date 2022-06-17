import React, { useEffect, useState } from 'react'

function Hooks() {
    const [count,setcounter]=useState(0)  
    useEffect(()=>{
        document.title=`u clicked ${count} times`
    }) 
  return (

    <div>
        <button onClick={()=>setcounter(count+1)}>Counter {count}</button>
    </div>
  )
}

export default Hooks