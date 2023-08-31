import React, { useState } from 'react'

// useState with object
function UseStateObject() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <input type='text' className='form-control w-50' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
            <input type='text' className='form-control w-50' value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
            <h2>Your first name is {name.firstName}</h2>
            <h2>Your last name is {name.lastName}</h2>
        </div>
    )
}

export default UseStateObject