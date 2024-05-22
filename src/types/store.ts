import { TicketsOverviewState } from "types/ticketsOverviewState";
import { FiltersState } from "types/filters";

export type State = {};

export type RootState = {
  ticketsOverview: TicketsOverviewState;
  filters: FiltersState;
};
