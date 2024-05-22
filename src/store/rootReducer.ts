import { combineReducers } from "redux";
import { State } from "types/store";
import ticketsOverviewSlice from "store/ticketsOverview";
import filtersSlice from "store/filters";

const appReducer = combineReducers<State>({
  [ticketsOverviewSlice.name]: ticketsOverviewSlice.reducer,
  [filtersSlice.name]: filtersSlice.reducer,
});

const rootReducer = (state: State, action: never) => appReducer(state, action);

export default rootReducer;
