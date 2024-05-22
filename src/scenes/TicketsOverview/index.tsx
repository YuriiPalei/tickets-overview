import { useTicketsList } from "common/hooks/useTicketsList";
import styles from "./styles.module.scss";
import TicketsOverviewList from "common/components/TicketsOverviewList";
import Filters from "common/components/Filters";

const TicketsOverview = () => {
  const { tickets, isFailed, isFullyLoaded, isLoading } = useTicketsList();

  return (
    <div className={styles.wrapper}>
      <div>
        <Filters />
      </div>
      <TicketsOverviewList
        tickets={tickets}
        isLoading={isLoading}
        isFailed={isFailed}
        isFullyLoaded={isFullyLoaded}
      />
    </div>
  );
};

export default TicketsOverview;
