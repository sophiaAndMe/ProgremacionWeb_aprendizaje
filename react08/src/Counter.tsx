import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "./redux/store.ts";
import {decrement, increment, incrementByAmount} from "./redux/counterSlice.ts";
import App from "./App.tsx";


export const Counter = () => {

    const [amount, setAmount] = useState<number>(0)


    const count = useSelector((state: RootState) =>
                       state.counter.value)

    const dispatch = useDispatch<AppDispatch>()

    return (

        <div>
            <h2>Contador Global: {count}</h2>

            <div>
                {/* Botones básicos */}
                <button onClick={() => dispatch(increment())}>+ Incrementar</button>
                <button onClick={() => dispatch(decrement())}>- Decrementar</button>
            </div>

            <div style={{ marginTop: '20px' }}>
                {/* Input con estado local interactuando con el estado global */}
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
                <button onClick={() => dispatch(incrementByAmount(amount))}>
                    Incrementar por cantidad
                </button>
            </div>

            <App/>
        </div>



    )

}