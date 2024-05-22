import { Ticket } from "types/ticketsOverviewState";
import { formatPrice } from "common/utils";
import aeLogo from "assets/a4e-logo.png";
import styles from "./styles.module.scss";
import TicketDetails from "common/components/TicketCard/TicketDetails";

type Props = {
  ticket: Ticket;
};

const TicketCard = ({ ticket }: Props) => {
  const { price, details, backwardDetails, transplants, id } = ticket;

  const ticketDeTails = [details, backwardDetails];

  return (
    <div className={styles.wrapper}>
      <div className={styles.headline}>
        <p>{formatPrice(price)}</p>
        <img src={aeLogo} alt="logo" />
      </div>
      <div className={styles.body}>
        {ticketDeTails.map((ticketDetail) => (
          <TicketDetails
            key={`${id}_${ticketDetail.from}`}
            details={ticketDetail}
            transplants={transplants}
          />
        ))}
      </div>
    </div>
  );
};

export default TicketCard;
