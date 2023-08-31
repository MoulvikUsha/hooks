import React from 'react'

function Button({handleClick, children}) {
    console.log(`Rednering ${children}`);
  return (
    <div>
        <button onClick={handleClick}>
            {children}
        </button>
    </div>
  )
}

export default React.memo(Button)