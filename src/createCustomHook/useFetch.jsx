import { useState , useEffect } from "react";

export const useFetcing = (url) => {
  const [data , setData] = useState({data : []});
  const [loading , setLoading] = useState(true);
  const [error , isError] = useState(null);

  useEffect(() => {
    const FetchingData = async () => {
      try {
        const API = await fetch(url);
        const result = await API.json();
        setData(result);
      } catch(error){
        isError(error);
      } finally {
        setLoading(false)
      }
    }
    FetchingData();
  } ,[url])

  return {data , loading , error}
}