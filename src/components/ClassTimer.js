import React, { useState, useEffect, useRef } from 'react'

function ClassTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000);
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
        </div>
    )
}

export default ClassTimer