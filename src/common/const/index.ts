export const FILTER_VALUES = {
  ALL_TICKETS: -1,
  NO_TRANSPLANTS: 0,
  ONE_TRANSPLANT: 1,
  TWO_TRANSPLANTS: 2,
  THREE_TRANSPLANTS: 3,
} as const;

export const SORT_VALUES = {
  CHIP: "Найдешевший",
  QUICK: "Найшвидший",
  OPTIMAL: "ОптимальнИй",
} as const;
