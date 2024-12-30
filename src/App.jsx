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

function App() {

  return (
    <>
    <CalculationMemo/>
    <FethingDataWithMemo url={"https://reqres.in/api/users"}/>
    <ReducerCount/>
    <FetchingReducer/>
    <Themed/>
    </>
  )
}

export default App
