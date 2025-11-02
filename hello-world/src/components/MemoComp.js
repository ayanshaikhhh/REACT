import React from 'react'

function MemoComp({name}) {
    console.log('rendering memo components');
    
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)































