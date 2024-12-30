import { useState , useEffect } from "react";


export default function FetchingEffect({url}){
  const [data , setData] = useState({data : []});
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const fetchingApi = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch(error){
      console.error(error)
      }finally {
        setLoading(false)
      }
    }
    fetchingApi();
  },[url])

  return (
    <div>
      {loading === true ? "loading..." : <ul>
        {data.data.map(({id , email}) => (
          <li key={id}>{email}</li>
        ))}
        </ul>}
    </div>
  )

}