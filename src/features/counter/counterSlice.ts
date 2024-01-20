import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: CounterState) => {
            state.count += 1
        }, 
        decrement: (state: CounterState) => {
            state.count -= 1
        }, 
        incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
            state.count += action.payload
        },
        reset: (state: CounterState) => {
            state.count = 0
        },
    }
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer