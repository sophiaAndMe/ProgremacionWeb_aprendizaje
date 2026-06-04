import type {RootState} from "./redux/store.ts";
import {useSelector} from "react-redux";

function App() {


  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <>
      <h1>El valor actual es: {count}</h1>
    </>
  )
}

export default App
