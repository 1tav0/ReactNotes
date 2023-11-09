import React, { useState } from 'react'

const ObjectState = () => {

  const [user, setUser] = useState({
    name: "",
    city: "",
    age: 50
  })

  console.log(user);
  const handleChange = (e) => {
    setUser({
      name: e.target.value
    });
  }

  return (
    <form>
      <input type="text" placeholder='Your name'
        onChange={handleChange}
      />
    </form>
  )
}

export default ObjectState