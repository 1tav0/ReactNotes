import React, { useEffect, useState } from 'react'

const ConditionalRendering = ({ id }) => {
  //this causes an error with the useState and useEffect
  const [something, setSomething] = useState("testing");
  useEffect(() => {
    
  }, [something]);
  //sometimes the id may exist and sometimes it may not and exit with the return inside the if
  return (
    <section>
      {
        !id
          ?"No id provided"
          :{/* Product card */ }
      }
    </section>
  )
}

export default ConditionalRendering