import { createEntityAdapter } from "@reduxjs/toolkit";
import { Ticket } from "types/ticketsOverviewState";

export const ticketsAdapter = createEntityAdapter<Ticket>();
