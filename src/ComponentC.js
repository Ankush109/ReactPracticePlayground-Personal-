
import React from 'react'
import { Usercontext,Channelcontext } from './App'

function ComponentC() {
  return (
    <div>
        <Usercontext.Consumer>
        {
                user => {
                    return(
                        <Channelcontext.Consumer>
                            {
                                channel=>{
                                    return  <div>User context value {user},channel context value {channel}</div>
                                }
                            }
                        </Channelcontext.Consumer>
                    )
                }
            }
            </Usercontext.Consumer>
    </div>
  )
}

export default ComponentC