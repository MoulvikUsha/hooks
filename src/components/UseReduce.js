import React, { useReducer } from 'react'

const inititalState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return inititalState
        default:
            return state
    }
}
function UseReduce() {
    const [state, dispatch] = useReducer(reducer, inititalState)
    return (
        <>
            <div className='countButtons'>
                <p>Count = {state}</p>
                <button className='btn btn-light' onClick={() => dispatch('increment')}>Increment</button>
                <button className='btn btn-light' onClick={() => dispatch('reset')}>Reset</button>
                <button className='btn btn-light' onClick={() => dispatch('decrement')}>Decrement</button>
            </div>
        </>
    )
}

export default UseReduce