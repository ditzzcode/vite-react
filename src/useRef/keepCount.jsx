import { useRef , useState , useEffect} from "react";

export default function KeepCounter() {
  const [count ,setCount] = useState(0)
  const initialRef = useRef(count);

  useEffect(() => {
    initialRef.current = count
  }, [count])

  const Increment = () => {
    setCount((c) => c + 1)
  };

  return (
    <div>
      <p>count : {count}</p>
      <p>refCount : {initialRef.current}</p>
      <button onClick={Increment}>Incrmenet Count</button>
    </div>
  )

}