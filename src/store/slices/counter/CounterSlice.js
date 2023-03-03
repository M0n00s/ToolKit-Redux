import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 10,
};

export const CounterSlice = createSlice({
  name: "[Counter]",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementby: (state, { payload }) => {
      state.counter += payload;
    },
  },
});

export const { increment, decrement, incrementby } = CounterSlice.actions;
