import React, { useState } from 'react'
//Object state instead of multiple smaller ones 
const ObjectStateAgain = () => {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    zipcode: ""
  });

  const handleChange = e => {
    //can also the prev updated function we saw before and spread that
    setForm({
      ...form, //to get all the contents of that form 
      [e.target.name]: e.target.value
    })
  }
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
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder='last name'
        className='px-1 py-2'
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder='email'
        className='px-1 py-2'
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        placeholder='password'
        className='px-1 py-2'
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder='address'
        className='px-1 py-2'
        onChange={handleChange}
      />
      <input
        type="text"
        name="zipcode"
        placeholder='zip code'
        className='px-1 py-2'
        onChange={handleChange}
      />
      <button>
        Submit
      </button>
    </form>
  )
}

export default ObjectStateAgain