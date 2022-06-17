import React,{useContext} from 'react'
import ComponentC from './ComponentC'
import { Usercontext,Channelcontext } from './App'
function ComponentB() {
  const user = useContext(Usercontext)
  const channel = useContext(Channelcontext)
  return (
    <div>
        {user}-{channel}                                                
    </div>
  )
}

export default ComponentB