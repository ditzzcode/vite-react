import './App.css'
import { ChangeValue } from './useState/changeValue'
import { CountEffect } from './useEffect/countEffect'
import FetchingEffect from './useEffect/FetchingEffect'
import FocusedInput from './useRef/InputedFocus'
import KeepCounter from './useRef/keepCount'
import { BigCalculation } from './useMemo/bigCalculation'
import { CalculationMemo } from './memo/memoCounter'
import { FethingDataWithMemo } from './memo/FetchingMemo'
import { ReducerCount } from './useReduce/ReduceCount'
import { FetchingReducer } from './useReduce/ReduceFetching'
import { Themed } from './useContext.jsx/Themed'
import { FetchDone , FetchData } from './useContext.jsx/FetchWithReduce'
import { useFetcing } from './createCustomHook/useFetch'
import useInput from './createCustomHook/useInput'

function App() {

  function FetchDataApi() {
    const {data , loading , error} = useFetcing("https://reqres.in/api/users")

    if(loading) return <h1>loading...</h1>
    if(error) return <h1>error 404</h1>

    return (
      <ul>
        {data.data.map((item) => (
          <li key={item.id}>{item.email}</li>
        ))}
      </ul>
    )
  }

  const InputName = () => {
    const name = useInput("");
    const email = useInput("");

    const HandlerSumbit = (e) => {
      e.preventDefault();
      console.log(name.value)
      console.log(email.value);
    }

    return (
      <form onSubmit={HandlerSumbit}>
        <div>
          <input type='text'  placeholder='username' value={name.value} onChange={name.onChange}/>
        </div>
        <div>
          <input type='email'  placeholder='email' required='off' value={email.value} onChange={email.onChange}/>
        </div>
        <button type='submit'>Sumbit</button>
      </form>
    )
  }

  return (
    <>
    <CalculationMemo/>
    <FethingDataWithMemo url={"https://reqres.in/api/users"}/>
    <ReducerCount/>
    <FetchingReducer/>
    <Themed/>
    <FetchDone>
    <FetchData/>
    </FetchDone>
    <FetchDataApi/>
    <InputName/>
    </>
  )
}

export default App
