import { useRef , useEffect} from "react";

export default function FocusedInput(){
  const initalRef1 = useRef(null)
  const initalRef2 = useRef(null)
  const initalRef3 = useRef(null)

useEffect(() => {
  console.log("focused Input")
} , [])

const FocusedButton1 = () => {
  initalRef1.current.focus();
}

const FocusedButton2 = () => {
  initalRef2.current.focus();
}

const FocusedButton3 = () => {
  initalRef3.current.focus();
}

return (
  <div>
    <h3>Focus input</h3>
    <input type="text" ref={initalRef1}/>
    <button onClick={FocusedButton1}>Focus</button>

    <input type="text" ref={initalRef2}/>
    <button onClick={FocusedButton2}>Focus</button>

    <input type="text" ref={initalRef3}/>
    <button onClick={FocusedButton3}>Focus</button>
  </div>
)
}