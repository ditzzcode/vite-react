import { useState , useEffect } from "react";


export const CountEffect = () => {
  const [count , setCount] = useState(0);

  useEffect(() => {
    console.log("count rendered")
  } , [count]);

const increment = () => {
  setCount((prevCount) => prevCount + 1)
}

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}