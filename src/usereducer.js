import React, { useReducer } from 'react'

const initialstate = 0
const reducer = (state, action) => {
    // return newstate
    switch (action) { // step 2
        case 'increament':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialstate
        default:
            return state
    }
}


function Usereducer() {
    const [count, dispatch] = useReducer(reducer, initialstate)
    return (
        <div>
            <div>
                count - {count}
            </div>
            <button onClick={() => dispatch('increment')}>INCREASE</button>
            <button onClick={() => dispatch('decrement')}>DECREASE</button>
            <button onClick={() => dispatch('reset')}>RESET</button>
        </div>
    )
}

export default Usereducer