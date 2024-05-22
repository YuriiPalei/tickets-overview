import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFiltersTransplants(state, action) {
      state.transplants = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export default filtersSlice;
