import { SORT_VALUES } from "common/const";
import { Ticket } from "types/ticketsOverviewState";

export const formatPrice = (price: number) => {
  return `${price} $`;
};

export const formatDuration = (duration: number) => {
  const durationString = duration.toFixed(2);

  const durationParts = durationString.split(".");

  if (!durationParts.length) return "";

  const hours = durationParts[0];
  const minutes = durationParts[1];

  return `${hours}год ${minutes}хв`;
};

export const formatTransplants = (transplants: string[]) => {
  if (transplants.length === 0) {
    return "Без пересадок";
  }

  if (transplants.length === 1) {
    return "1 пересадка";
  }

  return `${transplants.length} пересадки`;
};

export const formatTransplantValue = (value: number) => {
  if (value === -1) {
    return "Всі";
  }

  if (value === 0) {
    return "Без пересадок";
  }

  if (value === 1) {
    return "1 пересадка";
  }

  return `${value} пересадки`;
};

const sortByPrice = (a: Ticket, b: Ticket) => {
  return a.price - b.price;
};

const sortByDuration = (a: Ticket, b: Ticket) => {
  return (
    a.details.duration +
    a.backwardDetails.duration -
    (b.details.duration + b.backwardDetails.duration)
  );
};

export const sortComparators: Record<string, (a: Ticket, b: Ticket) => number> =
  {
    [SORT_VALUES.CHIP]: sortByPrice,
    [SORT_VALUES.QUICK]: sortByDuration,
    [SORT_VALUES.OPTIMAL]: (t1: Ticket, t2: Ticket) => {
      const resultByDuration = sortByDuration(t1, t2);

      if (resultByDuration === 0) {
        const sortByTransplants = t1.transplants.length - t2.transplants.length;

        if (sortByTransplants === 0) return sortByPrice(t1, t2);

        return sortByTransplants;
      }

      return resultByDuration;
    },
  };
