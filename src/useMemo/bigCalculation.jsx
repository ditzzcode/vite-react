import { useState , useMemo , memo} from "react";


export function BigCalculation(){
  const [count , setCount] = useState(0);
  const [value , setValue] = useState(1);


  const ExpensiveCalculation = (num) => {
    let result = 0;
    for(let i = 0; i < 1000000;i++){
      result += num
    }
    console.log("calculating....")
    return result;
  }

  const CalculationValue = useMemo(() => ExpensiveCalculation(value) ,[value]);

  const IncrementCount = () => {
    console.log("count added");
    setCount(count + 1)
  }

  return (
    <div>
     <p>Calculation {CalculationValue}</p>
          <button onClick={() => setValue(value + 1)}>Increment Value</button>

          <div>
            <p>count : {count}</p>
            <button onClick={IncrementCount}>Increment Count</button>
          </div>
    </div>
  )

}