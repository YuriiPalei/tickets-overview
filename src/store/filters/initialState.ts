import { FiltersState } from "types/filters";
import { FILTER_VALUES, SORT_VALUES } from "common/const";

export const initialState: FiltersState = {
  transplants: [FILTER_VALUES.ALL_TICKETS],
  sortBy: SORT_VALUES.CHIP,
};
