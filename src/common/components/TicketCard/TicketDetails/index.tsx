import { TicketDetails as TicketDetailsType } from "types/ticketsOverviewState";
import { formatDuration, formatTransplants } from "common/utils";
import styles from "./styles.module.scss";

type Props = {
  details: TicketDetailsType;
  transplants: string[];
};

const TicketDetails = ({ details, transplants }: Props) => {
  const { from, to, timeFrom, timeTo, duration } = details;

  return (
    <div className={styles.details}>
      <div className={styles.item}>
        <p className={styles.name}>
          {from} - {to}
        </p>
        <p className={styles.value}>
          {timeFrom} - {timeTo}
        </p>
      </div>
      <div className={styles.item}>
        <p className={styles.name}>В ДОРОЗІ</p>
        <p className={styles.value}>{formatDuration(duration)}</p>
      </div>
      <div className={styles.item}>
        <p className={styles.name}>{formatTransplants(transplants)}</p>
        <p className={styles.value}>{transplants.join(",")}</p>
      </div>
    </div>
  );
};

export default TicketDetails;
