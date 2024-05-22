import { ticketsAdapter } from "store/ticketsOverview/adapter";
import { RootState } from "types/store";
import { getFilters } from "store/filters/selectors";
import { FILTER_VALUES } from "common/const";
import { sortComparators } from "common/utils";

const ticketsSelectors = ticketsAdapter.getSelectors();

export const getAllTickets = (state: RootState) =>
  ticketsSelectors.selectAll(state.ticketsOverview.tickets);

export const getIsLoading = (state: RootState) =>
  state.ticketsOverview.isLoading;

export const getIsFailed = (state: RootState) => state.ticketsOverview.isFailed;

export const getIsFullyLoaded = (state: RootState) =>
  state.ticketsOverview.isFullyLoaded;

export const getFilteredTickets = (state: RootState) => {
  const allTickets = getAllTickets(state);
  const filters = getFilters(state);

  const { transplants, sortBy } = filters;

  const filteredTickets = allTickets.filter((ticket) => {
    if (transplants.includes(FILTER_VALUES.ALL_TICKETS)) {
      return true;
    }

    return transplants.includes(ticket.transplants.length);
  });

  return filteredTickets.sort(sortComparators[sortBy]);
};
