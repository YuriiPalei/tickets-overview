import { Ticket } from "types/ticketsOverviewState";

const tickets = [
  {
    id: 1,
    price: 13100,
    transplants: ["HKG"],
    details: {
      from: "LHR",
      to: "DXB",
      timeFrom: "10:45",
      timeTo: "08:00",
      duration: 34.15,
    },
    backwardDetails: {
      from: "DXB",
      to: "LHR",
      timeFrom: "11:20",
      timeTo: "00:50",
      duration: 16.3,
    },
  },
  {
    id: 2,
    price: 15100,
    transplants: ["HKG", "JNB"],
    details: {
      from: "LHR",
      to: "DXB",
      timeFrom: "10:45",
      timeTo: "08:00",
      duration: 17.15,
    },
    backwardDetails: {
      from: "DXB",
      to: "LHR",
      timeFrom: "11:20",
      timeTo: "00:50",
      duration: 40.3,
    },
  },
  {
    id: 3,
    price: 15400,
    transplants: ["HKG"],
    details: {
      from: "LHR",
      to: "DXB",
      timeFrom: "10:45",
      timeTo: "08:00",
      duration: 20.15,
    },
    backwardDetails: {
      from: "DXB",
      to: "LHR",
      timeFrom: "11:20",
      timeTo: "00:50",
      duration: 13.3,
    },
  },
  {
    id: 4,
    price: 21200,
    transplants: ["HKG", "JNB", "JNB"],
    details: {
      from: "LHR",
      to: "DXB",
      timeFrom: "10:45",
      timeTo: "08:00",
      duration: 21.15,
    },
    backwardDetails: {
      from: "DXB",
      to: "LHR",
      timeFrom: "11:20",
      timeTo: "00:50",
      duration: 12.3,
    },
  },
  {
    id: 5,
    price: 23900,
    transplants: [],
    details: {
      from: "LHR",
      to: "DXB",
      timeFrom: "10:45",
      timeTo: "08:00",
      duration: 11.15,
    },
    backwardDetails: {
      from: "DXB",
      to: "LHR",
      timeFrom: "11:20",
      timeTo: "00:50",
      duration: 9.3,
    },
  },
  {
    id: 6,
    price: 24000,
    transplants: ["HKG", "JNB", "JNB"],
    details: {
      from: "LHR",
      to: "DXB",
      timeFrom: "10:45",
      timeTo: "08:00",
      duration: 19.3,
    },
    backwardDetails: {
      from: "DXB",
      to: "LHR",
      timeFrom: "11:20",
      timeTo: "00:50",
      duration: 15.2,
    },
  },
  {
    id: 7,
    price: 24500,
    transplants: [],
    details: {
      from: "LHR",
      to: "DXB",
      timeFrom: "10:45",
      timeTo: "08:00",
      duration: 14.1,
    },
    backwardDetails: {
      from: "DXB",
      to: "LHR",
      timeFrom: "11:20",
      timeTo: "00:50",
      duration: 10.4,
    },
    lastInList: true,
  },
] as unknown as Ticket[];

export default tickets;

export const fetchTickets = async (): Promise<Ticket[]> => {
  return tickets;
};
