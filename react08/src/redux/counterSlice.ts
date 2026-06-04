import type {CounterState} from "../dto/CounterState.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState : CounterState = {
    value : 0
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    // -- acciones -- //
    reducers : {
        increment: (state) => {
            state.value +=1
        },
        decrement :
        (state) => {
            state.value -=1
        },
        // recibe un valor especifico
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

// exportamos las acciones para usarlas en los botones (useDispatch)
export const {increment, decrement, incrementByAmount} = counterSlice.actions
// exportamos el reduce para guardarlo en el Store
export default counterSlice.reducer;