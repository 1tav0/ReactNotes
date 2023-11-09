import React, { useEffect, useState } from 'react'

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

  //this is dangerous when we depend on an object because it is non-primitive 
  useEffect(() => {
    
  },[price.number]) //now the useEffect will render with a primitive type
  return (
    <button
      onClick={handleClick}
    >
      Click me
    </button>
  )
}

export default PrimitiveVsNon