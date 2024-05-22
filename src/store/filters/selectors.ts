import { RootState } from "types/store";

export const getTransplantsFilters = (state: RootState): number[] =>
  state.filters.transplants;

export const getFilters = (state: RootState) => state.filters;

export const getSorBy = (state: RootState) => state.filters.sortBy;
