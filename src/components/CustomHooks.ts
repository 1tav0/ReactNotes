//we're using useState so we need to make this a client
//to be able to use the hooks bc in Next.js by default the app files are server side components
// useState() client side component
// useEffect() client side component
// window.alert() browser side object
// localstorage.getItem("test") also browser side
// we must use client to make them client side component or import to a file that already has this header 
"use Client"

import React, { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(1920);
  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWindowSize(window.innerWidth);
    };
   
    window.addEventListener("resize", handleWindowSizeChange);
    
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    }
  }, []);

  return windowSize;
}

export function ExampleComponent1() {
  //say this component needs to know the width of the window
  // const [windowSize, setWindowSize] = useState(1920);

  // //to keep track of this state
  // useEffect(() => {
  //   const handleWindowSizeChange = () => {
  //     setWindowSize(window.innerWidth);
  //   };
  //   //we attach an eventListener to the window objec that whenever it resizes we trigger the handlewindow function this function will run everytime theres a change in the window
  //   window.addEventListener("resize", handleWindowSizeChange);
  //   //we need to remove the listener from the window after we are done aka clean up process
  //   return () => {
  //     window.removeEventListener("resize", handleWindowSizeChange);
  //   }
  // }, []);
  const windowSize = useWindowSize();
  return <div>Component 1 </div>;
}

//in this function we want the same code as above but then this will become too repetitive in order to avoid this we create a custom hook aka a utility helper function to be more professional 
export function ExampleComponent2() {
  const windowSize = useWindowSize();
  return <div>Component 2 </div>;
}