import React, { useEffect, useState } from 'react'

const PRICE_PER_ITEM = 5;

const StateProps = () => {

  const [quantity, setQuantity] = useState(1);
  //pro way derived from 1 useState
  const totalPrice = quantity * PRICE_PER_ITEM;
  const handleClick = () => {
    setQuantity(quantity + 1);
  }

  //another example 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + lastName;

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