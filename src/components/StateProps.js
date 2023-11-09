import React, { useEffect, useState } from 'react'

const PRICE_PER_ITEM = 5;

const StateProps = () => {

  const [quantity, setQuantity] = useState(1);
  //beginner way to do it
  const [totalPrice, setTotalPrice] = useState(0);
  const handleClick = () => {
    setQuantity(quantity + 1);
  }

  //we want to run this function every time the quantity changes
  useEffect(() => {
    setTotalPrice(quantity * PRICE_PER_ITEM);
  },[quantity])
  return (
    <div>
      <button
        onClick={handleClick}
      >
        Add 1 item
      </button>
      <p>Total Price: { totalPrice }</p>
    </div>
  )
}

export default StateProps