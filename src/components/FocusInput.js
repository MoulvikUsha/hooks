import React, {useEffect, useRef} from 'react'

function FocusInput() {
    const inputRef = useRef(null)
    useEffect(() => {
        //focus input emlement
        inputRef.current.focus()
    }, [])
  return (
    <div>
        <input className='form-control w-50' ref={inputRef} type='text' />
    </div>
  )
}

export default FocusInput