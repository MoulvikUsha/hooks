import React, { useReducer } from 'react'

const inititalState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {firstCounter: state.firstCounter - action.value}
        case 'reset':
            return inititalState
        default:
            return state
    }
}
function UseReducer2() {
    const [count, dispatch] = useReducer(reducer, inititalState)
    return (
        <>
            <div className='countButtons'>
                <p>Count = {count.firstCounter}</p>
                <button className='btn btn-light' onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
                <button className='btn btn-light' onClick={() => dispatch({ type: 'reset' })}>Reset</button>
                <button className='btn btn-light' onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
                <button className='btn btn-light' onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment5</button>
                <button className='btn btn-light' onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement5</button>
            </div>
        </>
    )
}

export default UseReducer2