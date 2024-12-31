import { useState , useEffect ,useReducer ,useContext ,createContext } from "react";

const initialFetch = createContext();

const initialValue  = {
  data: [],
  loading:true,
  error:null
}

const Reduce  = (state , action) => {
  switch(action.type){
    case 'fetch-succes':
      return {...state , data:action.value , loading:action.load};
    case 'fetch-failed':
      return {...state , error:action.error}
    default:
     return initialValue
  }
}

export const FetchDone = ({children}) => {
  const [state , dispatch] = useReducer(Reduce , initialValue);

  return (
    <initialFetch.Provider value={{state , dispatch}}>
      {children}
    </initialFetch.Provider>
  )
}


export const FetchData = () => {
  const {state , dispatch} = useContext(initialFetch);

  useEffect(() => {
    const FetchingApi = async () => {
      try {
        const API = await fetch("https://reqres.in/api/users");
        const result = await API.json();
        return dispatch({type:'fetch-succes', value:result.data , load:false})
      } catch (error){
        return dispatch({type:'fetch-failed' , error:error})
      }
    }
    FetchingApi();
  } ,[])

  if(state.loading) return <h1>loadin...</h1>
  if(state.error) return <h1>error : 404</h1>

  return (
    <div>
      <ul>
        {state.data.map((item) => (
          <li key={item.id}>{item.email}</li>
        ))}
      </ul>


    </div>
  )

}