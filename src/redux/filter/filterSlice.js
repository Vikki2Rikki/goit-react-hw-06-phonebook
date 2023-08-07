import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './filterInitialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";
// import { statusFilters } from "./constants";

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: filtersInitialState,
//   reducers: {
//     setStatusFilter(state, action) {
//       state.status = action.payload;
//     },
//   },
// });

// // Експортуємо генератори екшенів та редюсер
// export const { setStatusFilter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;
