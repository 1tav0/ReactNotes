import React, { useEffect, useState } from 'react'

const StateClosure = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("Interval function is running...");
      setCount(count + 1);
    }, 1000);
    //useEffect clean up function from prev useEffect run
    return () => {
      clearInterval(i);
    }
  }, [count])

  return (
    <p>Count is: {count}</p>
  )
}

export default StateClosure