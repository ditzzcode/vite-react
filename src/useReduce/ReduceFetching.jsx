import { useState , useEffect , useReducer } from "react";

const initialValue = {
  data: [],
  loading:false,
  error:null,
  message: "done",
}

const Reducer = (state , action) => {
  switch(action.type){
    case 'succes_fetch':
      return {...state , data:action.payload , loading:action.load};
    case 'failed_fetch':
      return {...state , error:payload.error};
    default:
      return initialValue.message
  }
}

export const FetchingReducer = () => {
  const [state , dispatch] = useReducer(Reducer , initialValue);

  useEffect(() => {
    const gettingApi = async () => {
      try{
      const response = await fetch("https://reqres.in/api/users");
      const result = await response.json();
      const {data} = result;
      return dispatch({type: 'succes_fetch' ,payload:data , load:false})
      } catch(error){
        dispatch({type:'failed_fetch' , error:error})
      } finally {
        console.log(state.message);
      }
    }
    gettingApi();
  } ,[])

  if(state.loading) return <h1>LOADING....</h1>


  return (
    <div>
        <ul>
          {state.data.map((item) => (
            <li key={item.id}> {item.id} : {item.email}</li>
          ))}
        </ul>
    </div>
  )
}