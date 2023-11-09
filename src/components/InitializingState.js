import React, { useEffect, useState } from 'react'
//initializing state with an object
const InitializingState = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/posts/1")
      .then(res => res.json)
      .then(data => {
        setPost(data);
      });
  }, []);
  //remember useEffect runs after rendering so we will first render this return block then run useEffect hence the values to post are undefined since i have now set any initial values for them in the useState
  //to fix it use optional chanining or initialize the useState with null
  return (
    <article>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </article>
  )
}

export default InitializingState