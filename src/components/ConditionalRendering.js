import React, { useEffect, useState } from 'react'

const ConditionalRendering = ({ id }) => {
  //sometimes the id may exist and sometimes it may not and exit with the return inside the if
  if (!id) {
    return "No id provided";
  }
  //this causes an error with the useState and useEffect
  const [something, setSomething] = useState("testing");
  useEffect(() => {
    
  }, [something]);
  return (
    <section>{/* Product card */ }</section>
  )
}

export default ConditionalRendering