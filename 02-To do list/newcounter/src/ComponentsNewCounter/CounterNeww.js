import React, {useState} from 'react'

function CounterNeww() {
    const [count, setCount] = useState(0)


    const increase = () => {
        setCount((prev) => prev + 1)
    }

    const decrease = () => {
        setCount((prev) => prev - 1)
    }

    const reset = () => {
        setCount(0)
    }

    // localStorage.setItem("countValue", count);
    // localStorage.getItem("countValue");

    

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease} disabled={count === 0}>decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterNeww
