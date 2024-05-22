import { Ticket } from "types/ticketsOverviewState";
import styles from "./styles.module.scss";
import TicketCard from "common/components/TicketCard";
import TicketsSortRow from "common/components/TicketsSortRow";

type Props = {
  tickets: Ticket[];
  isLoading: boolean;
  isFailed: boolean;
  isFullyLoaded: boolean;
};

const TicketsOverviewList = ({
  tickets,
  isLoading,
  isFullyLoaded,
  isFailed,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sort}>
        <TicketsSortRow />
      </div>
      <div className={styles.list}>
        {tickets.map((ticket) => (
          <TicketCard ticket={ticket} key={ticket.id} />
        ))}
      </div>
    </div>
  );
};

export default TicketsOverviewList;
