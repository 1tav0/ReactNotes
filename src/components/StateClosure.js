import React, { useEffect, useState } from 'react'

const StateClosure = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("Interval function is running...");
      setCount(prev => prev + 1);
    }, 1000);
  }, [])

  return (
    <p>Count is: {count}</p>
  )
}

export default StateClosure