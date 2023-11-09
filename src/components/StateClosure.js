import React, { useEffect, useState } from 'react'

const StateClosure = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log("Interval function is running...");
      setCount(count + 1);
    }, 1000);
  }, [count])
  return (
    <p>Count is: {count}</p>
  )
}

export default StateClosure