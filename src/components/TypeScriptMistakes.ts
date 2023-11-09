import React, { useEffect, useState } from 'react'
//we create a type object 
type Post = {
  title: string,
  body: string,
  tags: string[]
}

const InitializingState = () => {
  //typescript can infer what type is this variable going to be based on the initialized value but only for primitive values not for non-primitive values
  //for an object we must specify it is an object how ? we create one
  //we can specify also like so 
  //const [loading, setLoading] = useState<boolean>(true);
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  useEffect(() => {
    fetch("https://dummyjson.com/posts/1")
      .then(res => res.json)
      .then(data => {
        setPost(data);
        setLoading(false);
      });
  }, []);
  
  return (
    <article>
      {
        loading ? (
          "Loading..."
        ) : (
            <>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              //when we try to use a function here that isnt used for the type ts lets us know it is an error in this case it works bc text is a string  
              {
                text.toUpperCase();
              }
            </>
        )
      }
      
    </article>
  )
}

export default InitializingState