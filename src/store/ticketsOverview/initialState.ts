import { TicketsOverviewState } from "types/ticketsOverviewState";
import { ticketsAdapter } from "./adapter";

export const getEntitiesInitialState = () => ({
  tickets: ticketsAdapter.getInitialState(),
});

export const initialState: TicketsOverviewState = {
  isFullyLoaded: false,
  isLoading: false,
  isFailed: false,
  ...getEntitiesInitialState(),
};
