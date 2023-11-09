import React, { useState } from 'react'
//Object state instead of multiple smaller ones 
const ObjectStateAgain = () => {

  const [firsName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  return (
    <form action=""
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20%",
        justifyContent: "center",
        margin: "auto"
      }}
    >
      <input
        type="text"
        name="firsName"
        placeholder='first name'
        className='px-1 py-2'
      />
      <input
        type="text"
        name="lastName"
        placeholder='last name'
        className='px-1 py-2'
      />
      <input
        type="text"
        name="email"
        placeholder='email'
        className='px-1 py-2'
      />
      <input
        type="text"
        name="password"
        placeholder='password'
        className='px-1 py-2'
      />
      <input
        type="text"
        name="address"
        placeholder='address'
        className='px-1 py-2'
      />
      <input
        type="text"
        name="zipCode"
        placeholder='zip code'
        className='px-1 py-2'
      />
      <button>
        Submit
      </button>
    </form>
  )
}

export default ObjectStateAgain