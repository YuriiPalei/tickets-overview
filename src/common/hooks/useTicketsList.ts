import { useEffect } from "react";
import { fetchTickets } from "mock/tickets";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTicketsFailure,
  fetchTicketsSuccess,
} from "store/ticketsOverview/actions";
import {
  getFilteredTickets,
  getIsFailed,
  getIsFullyLoaded,
  getIsLoading,
} from "store/ticketsOverview/selectors";

export const useTicketsList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector(getFilteredTickets);
  const isFullyLoaded = useSelector(getIsFullyLoaded);
  const isLoading = useSelector(getIsLoading);
  const isFailed = useSelector(getIsFailed);

  useEffect(() => {
    fetchTickets()
      .then((tickets) => {
        dispatch(fetchTicketsSuccess(tickets));
      })
      .catch(() => dispatch(fetchTicketsFailure()));
  }, []);

  return { tickets, isFailed, isLoading, isFullyLoaded };
};
