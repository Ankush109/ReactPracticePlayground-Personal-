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


function Counterthree() {
    const [count, dispatch] = useReducer(reducer, initialstate)
    const [counttwo, dispatchtwo] = useReducer(reducer, initialstate)
    return (
        <div>
            <div>
                count - {count}
            </div>
            <button onClick={() => dispatch('increament')}>INCREASE</button>
            <button onClick={() => dispatch('decrement')}>DECREASE</button>
            <button onClick={() => dispatch('reset')}>RESET</button>
            <div>
                count two  - {counttwo}
            </div>
            <button onClick={() => dispatchtwo('increament')}>INCREASE</button>
            <button onClick={() => dispatchtwo('decrement')}>DECREASE</button>
            <button onClick={() => dispatchtwo('reset')}>RESET</button>
        </div>
    )
}

export default Counterthree