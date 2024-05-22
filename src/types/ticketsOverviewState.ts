import { getEntitiesInitialState } from "store/ticketsOverview/initialState";

export type TicketDetails = {
  from: string;
  to: string;
  timeFrom: string;
  timeTo: string;
  duration: number;
};

export type TicketsOverviewState = {
  isLoading: boolean;
  isFullyLoaded: boolean;
  isFailed: boolean;
} & ReturnType<typeof getEntitiesInitialState>;

export type Ticket = {
  id: string;
  price: number;
  transplants: string[];
  details: TicketDetails;
  backwardDetails: TicketDetails;
  lastInList?: boolean;
};
