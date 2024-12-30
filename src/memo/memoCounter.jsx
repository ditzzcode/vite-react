import { useState , memo } from "react";

const CountMemo = memo(({count}) => {
console.log("child rendered...");

return (
<div>
  <p>count : {count}</p>
</div>
)

})

export function CalculationMemo(){
  const [count , setCount] = useState(0);
  const [value , setValue] = useState("");


  const Increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  const handleChnage = (e) => {
    console.log("value changed");
    setValue(e.target.value)
  }

  return (
    <div>
      <CountMemo count={count}/>
      <button onClick={Increment}>Increment</button>

      <p>text : {value}</p>
      <input type="text" value={value} onChange={handleChnage}/>
    </div>
  )
}