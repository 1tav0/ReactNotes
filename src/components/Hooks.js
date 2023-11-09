import React, { useState } from 'react'

const Hooks = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className=''
      >
        Click me
      </button>
      <p>Count is: {count}</p>
    </>
  )
}

export default Hooks