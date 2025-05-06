import React from 'react'
import { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <>
    <div className="main_container">

    <div className="display">
    {count}
    </div>

    <button onClick={() => setCount((count) => count + 1)}>
          Increment 
        </button>

    <button onClick={() => setCount((count) => count>1 ? count - 1: count==0)}>
        decrement
        </button>
        <button onClick={() => setCount((count) => count == 0)}>
        Reset
        </button>
    
        </div>
    </>

  )
}

export default Counter