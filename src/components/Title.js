import React from 'react'

function Title() {
    console.log('Title');
  return (
    <div>
        useCallaback
    </div>
  )
}

export default React.memo(Title)