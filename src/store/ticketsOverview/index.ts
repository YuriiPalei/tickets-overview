import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { ticketsAdapter } from "store/ticketsOverview/adapter";

const ticketsOverviewSlice = createSlice({
  name: "ticketsOverview",
  initialState,
  reducers: {
    fetchTicketsSuccess(state, action) {
      state.isLoading = false;
      state.isFullyLoaded =
        action.payload?.[action.payload.length - 1]?.lastInList;
      ticketsAdapter.addMany(state.tickets, action.payload);
    },
    fetchTicketsFailure(state) {
      state.isLoading = false;
      state.isFailed = true;
    },
  },
});

export default ticketsOverviewSlice;
