import { useState } from "react";

export const ChangeValue = () => {
  const [count , setCount] = useState(0);
  const [loading ,setLoading] = useState(true)

  return (
    <div>
      <p>count : {count}</p>
      {loading === true ? "loding..." : ""}
      <button onClick={() => {setCount(count + 1) , setLoading(false)}}>increment</button>
    </div>
  )
}