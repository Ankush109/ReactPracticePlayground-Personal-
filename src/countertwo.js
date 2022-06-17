import React, { useReducer } from 'react'
import "./countertwo.css"
const initialstate ={
    firstcounter:0,
    secondcounter:10
}
const reducer = (state, action) => {
    // return newstate
    switch (action.type) { // step 2
        case 'increament':
            return {...state,firstcounter:state.firstcounter+action.value}
        case 'decrement':
            return {...state,firstcounter:state.firstcounter-1}
            case 'increament2':
                return {...state,secondcounter:state.secondcounter+action.value}
            case 'decrement2':
                return {...state,secondcounter:state.secondcounter-1}
        case 'reset':
            return initialstate
        default:
            return state
    }
}


function Countertwo() {
    const [count, dispatch] = useReducer(reducer, initialstate)
    return (
        <div>
            <div>
               first counter - {count.firstcounter}
            </div>
            <div>
              second  counter - {count.secondcounter}
            </div>
            <button className='button' onClick={() => dispatch({type :'increament',value:1})}>INCREASE</button>
            <button className='button'onClick={() => dispatch({type:'decrement',value:1})}>DECREASE</button>
            <button className='button' onClick={() => dispatch({type:'increament',value:5})}>increaseby5</button>
            <button className='button' onClick={() => dispatch({type:'reset',value:1})}>RESET</button>
            <button className='button' onClick={() => dispatch({type :'increament2',value:1})}>INCREASE counter2</button>
            <button className='button' onClick={() => dispatch({type:'decrement2',value:1})}>DECREASE counter2</button>
        </div>
    )
}

export default Countertwo