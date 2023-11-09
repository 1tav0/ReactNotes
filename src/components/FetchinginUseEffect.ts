"use Client"
import { useEffect, useState } from "react";


type PostBodyProps = {
  id: number
}

export default function Post() {
  //want to pass the id to the postbody
  const [id, setId] = useState(1);

  return (
    <div>
      <button
        onClick= {
          () => setId(Math.floor(Math.random()*100))
        }
      >
        Show me a different post
      </button>
      < PostBody id = { id } />
    </div>
  );
}

export function PostBody({id}: PostBodyProps) {
  //based on the passed id will fetch some post
  const [text, setText] = useState("");
  //in the real world: when we click the button multiple times the id will change and the fetch call will be made and setText will be changed, flashing the cards really quickly to the user, we want to avoid this
  //it creates a race condition to see which click fetches first
  //to avoid this 
  const controller = new AbortController();
  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`, {
      signal: controller.signal
    })
      .then(res => res.json())
      .then(data => setText(data.body))
    
    //allows us to abort the previous click so when we click multiple times we get the last ones
    return () => controller.abort();
  }, [id]);

  return <p>{text}</p>
}

//useEffect is render last first it set ups the useState then the return text p tag then it renders the useEffect
//besides this race conditons for fetch inside the useEffect we can also have cache problems
//say we need to fetch a post with an id that we have already fetched, why fetch again, we can have cache mechanism somehow to avoid this
//so to avoid this we shouldnt fetch in useEffect how to do it then? in server components and if we want to fetch data in the client components there are libraries like swr from vercel that take care of cache issues and race conditions, loading state, error state and many others for us