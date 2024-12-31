import { useState } from "react";

export default function useInput(values){
  const [value , setValue] = useState(values);

  const ChangeHandler = (e) =>{
    setValue(e.target.value);
  }

  return {
    value,
    onChange:ChangeHandler
  }
}