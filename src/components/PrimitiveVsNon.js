import React, { useState } from 'react'

const PrimitiveVsNon = () => {
  console.log("Component Rendering...");
  const [price, setPrice] = useState(0);
  
  const handleClick = () => {
    setPrice(0);
  }

  return (
    <button
      onClick={handleClick}
    >
      Click me
    </button>
  )
}

export default PrimitiveVsNon