import React, { useState } from 'react'

const PrimitiveVsNon = () => {
  console.log("Component Rendering...");
  const [price, setPrice] = useState({
    number: 100,
    totalPrice: true
  });
  
  const handleClick = () => {
    setPrice({
      number: 100,
      totalPrice: true
    });
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