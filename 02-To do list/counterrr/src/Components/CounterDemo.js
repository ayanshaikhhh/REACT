import React, {useState} from 'react'

function CounterDemo() {
    const [count, setCount] = useState(0)

    
  return (
    <div>
        <h1>{count}</h1>
      
    </div>
  )
}

export default CounterDemo

