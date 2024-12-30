import { useState , useEffect , memo, useCallback } from "react";


const MemoizeData = memo(({value , initialFetching}) => {


  return (
    <div>
      <ul>
        {value.data.map((item) => (
          <li key={item.id}>{item.email}</li>
        ))}
      </ul>

      <button onClick={initialFetching}>Clickme</button>
    </div>
  )

})

export function FethingDataWithMemo({url}){
const [data , setData] = useState({data : []});
const [text , setText] = useState("");

useEffect(() => {
  const GettingApi = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error(err);
    }
  }
  GettingApi();
} ,[url])



const initialFetching = useCallback(() => console.log("rendered") , [])

return (
  <div>
    <MemoizeData value={data} initialFetching={initialFetching}/>
    <div>
      <p>text : {text}</p>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  </div>
)
}