import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 10,
};

export const CounterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
      console.log(state);
      state.counter += 1;
    },
  },
});

export const { increment } = CounterSlice.actions;
