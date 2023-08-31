import React, { useState } from 'react'

// useState with previous value
function HookCounterTwo() {
    const initialState = 0
    const [count, setCount] = useState(initialState)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(preValue => preValue + 1)
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(preValue => preValue + 1)}>Increment</button>
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={() => setCount(preValue => preValue - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo