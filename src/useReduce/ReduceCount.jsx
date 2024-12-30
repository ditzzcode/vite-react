import { useReducer } from "react";

const initialState = {count : 0}

const reducer = (state , action) => {
  switch(action.type){
    case 'INCREMENT':
      return {count : state.count + 1};
    case 'DECREMENT':
      return {count : state.count - 1};
    case 'RESET':
      return {count : 0};

  }
}

export function ReducerCount(){
  const [state , dispatch] = useReducer(reducer , initialState);

  const incremnet = () => {
    dispatch({type:'INCREMENT'});
  };

  const decrement = () => {
    dispatch({type:'DECREMENT'});
  };

  const reset = () => {
    dispatch({type:'RESET'});
  }

  return (
    <div>
      <p>state : {state.count}</p>
      <button onClick={incremnet}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}